// app.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./utils/dbconnect');
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = connect.connect();

app.use('/', routes);

const port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Application started at port ${port}`);
  }
});
