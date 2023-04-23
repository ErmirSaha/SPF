require('express-async-errors');

const express = require('express');
const calculateRouter = require('./src/controllers/calculate');
const middleware = require('./src/middleware/middleware');

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use('/api/calculate-tsp', calculateRouter);
app.use(middleware.errorHandler);

module.exports = app;
