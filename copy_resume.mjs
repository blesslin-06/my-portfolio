import { copyFileSync } from 'fs';
copyFileSync(
  'C:/Users/blesslin/Downloads/BLESSLIN RESUME STYLED (1).docx',
  'C:/Users/blesslin/blesslyn/my-app/public/BLESSLIN_RESUME.docx'
);
console.log('Resume copied to public folder successfully!');
