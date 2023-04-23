import axios from 'axios';

const baseUrl = '/api';

const calculateTSP = async (markers) => {
  try {
    const result = await axios.post(`${baseUrl}/calculate-tsp`, markers);
    return result;
  } catch (error) {
    return undefined;
  }
};

const routeService = {
  calculateTSP,
};

export default routeService;
