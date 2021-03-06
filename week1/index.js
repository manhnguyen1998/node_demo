const express = require('express'),
     http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;
const dishRouter = require('./routes/dishRouter');
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/dishes',dishRouter);
app.use(express.static(__dirname+ '/public'))


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});