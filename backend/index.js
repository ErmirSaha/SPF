require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.static('build'));

/* app.get('/', (req, res) => {
  res.send('hello');
});
*/
// Dijkstra tänne

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
