
 
 
 function calculateDistance(locations, path) {
  let distance = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const loc1 = locations[path[i]];
    const loc2 = locations[path[i + 1]];
    distance += LatLonDistance(loc1.lat, loc1.lng, loc2.lat, loc2.lng);
  }
  return distance;
}
 
 
 const LatLonDistance = (lat1, lon1, lat2, lon2) => {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

module.exports = calculateDistance
module.exports = LatLonDistance