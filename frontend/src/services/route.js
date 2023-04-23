import axios from 'axios';

const baseUrl = '/api';

const calculateTSP = async (markers) => {
  console.log('form on frontend', markers);
  const result = await axios.post(`${baseUrl}/calculate-tsp`, markers);
  return result;
};

const routeService = {
  calculateTSP,
};

export default routeService;
