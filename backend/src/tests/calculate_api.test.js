const supertest = require('supertest');
const app = require('../../app');

const api = supertest(app);

describe('When POST /api/calculate-tsp', () => {
  test('A request with no markers is rejected', async () => {
    await api.post('/api/calculate-tsp')
      .expect(400);
  });

  test('A request with under 3 markers is rejected', async () => {
    const markers = [{ lat: 34.66935854524545, lng: 75.05859375000001 },
      { lat: 36.66935854524545, lng: 76.05859375000001 }];
    await api.post('/api/calculate-tsp')
      .send(markers)
      .expect(400);
  });

  test('A request with over 10 markers is rejected', async () => {
    const markers = [
      { lat: 34, lng: 75 },
      { lat: 36, lng: 76 },
      { lat: 31, lng: 75 },
      { lat: 32, lng: 76 },
      { lat: 34, lng: 75 },
      { lat: 36, lng: 76 },
      { lat: 35, lng: 75 },
      { lat: 36, lng: 76 },
      { lat: 37, lng: 75 },
      { lat: 38, lng: 76 },
      { lat: 39, lng: 75 },
      { lat: 30, lng: 75 },
      { lat: 63, lng: 76 },
    ];
    await api.post('/api/calculate-tsp')
      .send(markers)
      .expect(400);
  });

  test('A valid request is calculated right', async () => {
    const markers = [
      { lat: 34.66935854524545, lng: 75.05859375000001 },
      { lat: 36.66935854524545, lng: 76.05859375000001 },
      { lat: 38.66935854524545, lng: 72.05859375000001 },

    ];
    const response = await api.post('/api/calculate-tsp')
      .send(markers)
      .expect(200);

    const path = [
      { lat: 34.66935854524545, lng: 75.05859375000001 },
      { lat: 36.66935854524545, lng: 76.05859375000001 },
      { lat: 38.66935854524545, lng: 72.05859375000001 },
      { lat: 34.66935854524545, lng: 75.05859375000001 },
    ];

    expect(response.body.distance === 1175.3669146255652);
    expect(response.body.path).toEqual(path);
  });
});
