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
  res.sendFile(path.join(__dirname, 'templates/index.html'));  
});

app.post('/merge', upload.array('pdfs', 3), async (req, res, next) => {
  console.log(req.files);
 
  await mergepdf(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path) , path.join(__dirname, req.files[2].path))
 
 
  res.redirect('http://172.23.149.243:3000/static/merged.pdf');
});

app.listen(port,'0.0.0.0' , () => {
  console.log(`Example app listening at http://172.23.149.243:${port}`);
});


