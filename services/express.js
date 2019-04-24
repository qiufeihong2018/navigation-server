'use strict';
const express = require('express');
const config = require('../config')();
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(config.expressHttpPort, () => console.log('Example app listening on port 5001!'));
