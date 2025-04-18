onst express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const { generateChartData } = require('./chartEngine');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'data_rainbow'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to data_rainbow database');
});
