require('dotenv').config();
const express = require('express');
const router = require('./routes/router');
// const bodyParser = require('body-parser');
const app = express();
const connect = require('./config/db');

connect();
const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
app.use(express.json());
app.use(router);

app.listen(port, console.log(`Server is running on port ${port}`));