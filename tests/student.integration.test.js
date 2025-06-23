// tests/student.integration.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Student = require('../models/Student');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Student.deleteMany();
});

describe('Student Model - Integration Tests', () => {
  it('should save and fetch student', async () => {
    const newStudent = new Student({ name: 'Shivangi', email: 'shiv@example.com', course: 'DSA' });
    await newStudent.save();

    const students = await Student.find();
    expect(students.length).toBe(1);
    expect(students[0].name).toBe('Shivangi');
  });
});
