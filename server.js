const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(express.json());
app.use(express.static(__dirname + '/views')); //views is our directory

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

const port = 3002; 

app.listen(port, () =>{
    console.log(`listening on port ${port}`); //backtick for string format
});

app.set('view engine', 'ejs');

//===============================

tf = require('@tensorflow/tfjs-node');

app.get('/', async (req, res) => {
  res.render('index', {review: false, name: false });
});