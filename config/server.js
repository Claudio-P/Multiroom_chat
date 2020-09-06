const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const { body, validatorResult } = require('express-validator');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;