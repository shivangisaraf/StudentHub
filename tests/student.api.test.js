const app = require('../app'); // moved to after DB connection
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Make sure app is required *after* DB is connected
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Student API - Endpoints', () => {
  it('should add a new student', async () => {
    const res = await request(app)
      .post('/add')
      .send({ name: 'Shivangi', email: 'shiv@example.com', course: 'MERN' });
    expect(res.statusCode).toBe(302);
  });

  it('should list all students on GET /', async () => {
    await request(app)
      .post('/add')
      .send({ name: 'Test', email: 't@example.com', course: 'ML' });

    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
