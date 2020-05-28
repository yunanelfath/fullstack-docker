const supertest = require('supertest');
const app = require('../index.js');
const config = require('../config')
const http = require('http')

describe('GET Greeting Api', () => {
  let server;

  beforeAll(done => {
    server = http.createServer(app);
    server.listen(done);
    request = supertest(server)
  });

  afterAll(done => {
    server.close();
  });

  it('GET /hi should return greeting to the world', async (done) => {
    const response = await request.get(`${config.api.prefix}/hi`);

      expect(response.body.result).toBe('hello world');
      done();
  });

});
