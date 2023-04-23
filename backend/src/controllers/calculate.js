const calculateRouter = require('express').Router();
const TSP = require('../utils/TSP_helper');

calculateRouter.post('/', (req, res) => {
  const markers = req.body;
  if (Object.keys(markers).length === 0) {
    res.status(400).json({ error: 'Markers missing' });
    return;
  }
  if (markers.length > 10) {
    res.status(400).json({ error: 'Marker input too long' });
    return;
  }
  if (markers.length < 3) {
    res.status(400).json({ error: 'Marker input too short' });
    return;
  }
  const result = TSP(markers);

  res.send(result);
});

module.exports = calculateRouter;
