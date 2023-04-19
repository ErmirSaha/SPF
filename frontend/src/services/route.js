import axios from 'axios';

const baseUrl = '/api';

const calculateDistance = async (markers) => {
  const result = await axios.post(`${baseUrl}/calculate-tsp`, markers);
  return result;
};

const routeService = {
  calculateDistance,
};

export default routeService;
