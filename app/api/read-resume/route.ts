import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';
import { gunzipSync, inflateRawSync } from 'zlib';

function readUInt32LE(buf: Buffer, offset: number): number {
  return buf[offset] | (buf[offset+1] << 8) | (buf[offset+2] << 16) | (buf[offset+3] << 24);
}
function readUInt16LE(buf: Buffer, offset: number): number {
  return buf[offset] | (buf[offset+1] << 8);
}

function findZipEntry(buf: Buffer, targetName: string): { data: Buffer; method: number } | null {
  let offset = 0;
  while (offset < buf.length - 30) {
    const sig = readUInt32LE(buf, offset);
    if (sig !== 0x04034b50) { offset++; continue; }
    const compressionMethod = readUInt16LE(buf, offset + 8);
    const fileNameLen = readUInt16LE(buf, offset + 26);
    const extraLen = readUInt16LE(buf, offset + 28);
    const compressedSize = readUInt32LE(buf, offset + 18);
    const fileName = buf.slice(offset + 30, offset + 30 + fileNameLen).toString('utf8');
    const dataStart = offset + 30 + fileNameLen + extraLen;
    if (fileName === targetName) {
      return { data: buf.slice(dataStart, dataStart + compressedSize), method: compressionMethod };
    }
    offset = dataStart + compressedSize;
  }
  return null;
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'BLESSLIN_RESUME.docx');
    const buf = readFileSync(filePath);
    const entry = findZipEntry(buf, 'word/document.xml');
    if (!entry) return NextResponse.json({ error: 'Could not find document.xml' }, { status: 500 });

    let xmlBuf: Buffer;
    if (entry.method === 0) {
      xmlBuf = entry.data;
    } else if (entry.method === 8) {
      // deflate (most common in docx)
      xmlBuf = inflateRawSync(entry.data);
    } else {
      xmlBuf = gunzipSync(entry.data);
    }

    const xml = xmlBuf.toString('utf8');
    const text = xml
      .replace(/<w:br[^/]*/g, '\n')
      .replace(/<w:p[ >\/]/g, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&#x[0-9A-Fa-f]+;/g, ' ')
      .replace(/\r/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    return NextResponse.json({ text });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
