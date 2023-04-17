require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.static('build'));

app.get('/api/shortest-path-calculation', (req, res) => {
  res.send(req.body);
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
