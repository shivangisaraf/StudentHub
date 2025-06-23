// tests/student.unit.test.js
const Student = require('../models/Student');

jest.mock('../models/Student');

describe('Student Model - Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a student successfully', async () => {
    const mockData = { name: 'Shivangi', email: 'shiv@example.com', course: 'MERN' };

    Student.create.mockResolvedValue(mockData);

    const result = await Student.create(mockData);
    expect(result).toEqual(mockData);
    expect(Student.create).toHaveBeenCalledWith(mockData);
  });

  it('should update a student', async () => {
    const updatedData = { name: 'Updated', email: 'up@example.com', course: 'DSA' };
    Student.findByIdAndUpdate.mockResolvedValue(updatedData);

    const result = await Student.findByIdAndUpdate('123', updatedData);
    expect(result).toEqual(updatedData);
  });
});
