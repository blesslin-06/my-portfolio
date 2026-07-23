// Extracts text from BLESSLIN_RESUME.docx using only built-in Node.js modules
// .docx is a zip file; the text lives in word/document.xml
import { readFileSync, writeFileSync } from 'fs';
import { createUnzip } from 'zlib';
import { Readable } from 'stream';

const buf = readFileSync('./public/BLESSLIN_RESUME.docx');

// A .docx is a ZIP. We'll parse it manually using the ZIP local file header format.
// Simple approach: find the word/document.xml entry
function findZipEntry(buf, targetName) {
  let offset = 0;
  while (offset < buf.length - 4) {
    // Local file header signature
    if (buf.readUInt32LE(offset) !== 0x04034b50) { offset++; continue; }
    const fileNameLen = buf.readUInt16LE(offset + 26);
    const extraLen = buf.readUInt16LE(offset + 28);
    const fileName = buf.slice(offset + 30, offset + 30 + fileNameLen).toString('utf8');
    const compressedSize = buf.readUInt32LE(offset + 18);
    const compressionMethod = buf.readUInt16LE(offset + 8);
    const dataStart = offset + 30 + fileNameLen + extraLen;
    if (fileName === targetName) {
      return { data: buf.slice(dataStart, dataStart + compressedSize), method: compressionMethod };
    }
    offset = dataStart + compressedSize;
  }
  return null;
}

function inflate(buf) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const unzip = createUnzip();
    const readable = new Readable();
    readable.push(buf);
    readable.push(null);
    readable.pipe(unzip);
    unzip.on('data', c => chunks.push(c));
    unzip.on('end', () => resolve(Buffer.concat(chunks)));
    unzip.on('error', reject);
  });
}

const entry = findZipEntry(buf, 'word/document.xml');
if (!entry) { console.log('Could not find word/document.xml'); process.exit(1); }

let xmlBuf;
if (entry.method === 0) {
  xmlBuf = entry.data;
} else {
  xmlBuf = await inflate(entry.data);
}

const xml = xmlBuf.toString('utf8');
// Extract text nodes from XML, join paragraphs
const text = xml
  .replace(/<w:p[ >]/g, '\n<w:p ')
  .replace(/<[^>]+>/g, '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

writeFileSync('./resume_extracted.txt', text, 'utf8');
console.log('=== RESUME TEXT ===');
console.log(text);
