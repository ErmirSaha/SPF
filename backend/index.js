 const calculateDistance = require("./src/helpers/helpers")

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
    { lat: 35.6895, lng: 139.6917 }
    // ... lisää enemmän 
  ];
  
  const result = TSP(locations);

console.log('Backend')
console.log(result);

//const diss = calculateDistance(60,24,59,20); 
//console.log(diss);
