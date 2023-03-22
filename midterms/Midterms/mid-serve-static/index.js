//1. Installing Express
//2. Installing libraries/dependencies
//3. Require statements

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//4. use the middleware required for serving static

app.use(express.static('public'));

//files in uploads
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//image filter
const upload = multer({
  storage: fileStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      cb(new Error('Upload only png, jpg, and jpeg format.'));
    }
  },
});

//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

//route to upload
app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'file-upload.html');
});

//create the route to serve a static index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/' + 'about.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/' + 'blog.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/' + 'contact.html');
});

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});

//rerouting
app.get('ab*cd', function (req, res) {
  res.send('Error');
});

//forms in contacts
app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    name: req.body.name,
    subject: req.body.subject,
    message: req.body.message,
    email: req.body.email,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

//Setting the listener  to ENV PORT info
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
