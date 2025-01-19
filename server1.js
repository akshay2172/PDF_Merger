import express from 'express';
import path from 'path';
import multer from 'multer';
import { mergepdf } from './merge.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const upload = multer({ dest: 'uploads/' });

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/PDF.html'));  
});

app.post('/merge', upload.array('pdfs', 10), async (req, res, next) => {
  console.log(req.files);
 
  const pdfPaths = req.files.map(file => path.join(__dirname, file.path));

  await mergepdf(pdfPaths);
 
  res.redirect('http://172.23.149.243:3000/static/merged.pdf');
});

app.listen(port,'0.0.0.0' , () => {
  console.log(`Example app listening at http://172.23.149.243:${port}`);
});


