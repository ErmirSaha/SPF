require('dotenv').config();
const express = require('express');
const helpers = require('./src/helpers/helpers');

const app = express();
app.use(express.static('build'));
app.use(express.json());

app.post('/api/calculate-tsp', (req, res) => {
  const markers = req.body;
  if (markers.length > 11) {
    res.send({ error: 'Too many markers' });
    return;
  }
  const result = helpers.TSP(markers);
  res.send(result);
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
