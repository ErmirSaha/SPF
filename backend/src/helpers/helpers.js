// Converts numeric degrees to radians
function toRad(Value) {
  // eslint-disable-next-line no-mixed-operators
  return Value * Math.PI / 180;
}

const LatLonDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1InRad = toRad(lat1);
  const lat2InRad = toRad(lat2);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1InRad) * Math.cos(lat2InRad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

function calculateDistance(locations, path) {
  let distance = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < path.length - 1; i++) {
    let loc1;
    if (i === 0) {
      // eslint-disable-next-line prefer-destructuring
      loc1 = locations[0];
    } else {
      loc1 = path[i - 1];
    }
    let loc2;
    if (i === path.length - 1) {
      // eslint-disable-next-line prefer-destructuring
      loc2 = locations[0];
    } else {
      loc2 = path[i];
    }
    distance += LatLonDistance(loc1.lat, loc1.lng, loc2.lat, loc2.lng);
  }
  return distance;
}

/* Dijkstra tänne */

function TSP(locations) {
  let shortestPath = null;
  let shortestDistance = Infinity;
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      const distance = calculateDistance(locations, m);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        shortestPath = m;
      }
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(locations.slice(1));
  shortestPath.unshift(locations[0]);
  shortestPath.push(locations[0]);
  return {
    path: shortestPath,
    distance: shortestDistance,
  };
}
// esimerkki sijainnin
const locations = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 40.7128, lng: -74.0060 },
  { lat: 51.5074, lng: -0.1278 },
  { lat: 35.6895, lng: 139.6917 },
  // ... lisää enemmän
];
const result = TSP(locations);

console.log('Backend');
console.log(result);

module.exports = TSP;
