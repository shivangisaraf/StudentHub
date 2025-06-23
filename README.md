# Student Management System

A full-stack web application for managing student records built with Node.js, Express.js, MongoDB, and EJS templating engine.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## 🌐 Live Demo
**[🚀 View Live Application](https://studenthub-6uwd.onrender.com)**

## Features

- **View Students**: Display all student records in a user-friendly interface
- **Add Students**: Create new student records with name, email, and course information
- **Edit Students**: Update existing student information
- **Delete Students**: Remove student records from the database
- **Responsive Design**: Clean and intuitive user interface

## Technologies Used

- **Backend**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS (Embedded JavaScript) templating engine
- **Styling**: CSS (served from public directory)
- **Environment Management**: dotenv for configuration

## Project Structure

```
student-management-system/
├── models/
│   └── Student.js          # MongoDB schema for student data
├── routes/
│   └── student.js          # Express routes for CRUD operations
├── views/
│   ├── index.ejs           # Main page displaying all students
│   ├── add.ejs             # Form for adding new students
│   └── edit.ejs            # Form for editing existing students
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── tests/                  # Test files directory
│   ├── student.unit.test.js
│   ├── student.integration.test.js
│   └── student.api.test.js
├── .env                    # Environment variables
├── app.js                  # Main application file
└── package.json
```

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- npm (comes with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=mongodb://localhost:27017/studentDB
   PORT=3000
   ```
   
   For MongoDB Atlas, use:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/studentDB
   PORT=3000
   ```

4. **Create the Student model**
   
   Create `models/Student.js`:
   ```javascript
   const mongoose = require('mongoose');

   const studentSchema = new mongoose.Schema({
     name: {
       type: String,
       required: true,
       trim: true
     },
     email: {
       type: String,
       required: true,
       unique: true,
       trim: true
     },
     course: {
       type: String,
       required: true,
       trim: true
     }
   }, {
     timestamps: true
   });

   module.exports = mongoose.model('Student', studentSchema);
   ```

## Dependencies

Add these to your `package.json`:

```json
{
  "name": "student-management-system",
  "version": "1.0.0",
  "description": "A web application for managing student records",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "ejs": "^3.1.9",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.5.0",
    "supertest": "^6.3.3",
    "mongodb-memory-server": "^8.12.2"
  }
}
```

## Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Run the application**
   
   For development:
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

3. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all students |
| GET | `/add` | Show add student form |
| POST | `/add` | Create new student |
| GET | `/edit/:id` | Show edit student form |
| POST | `/edit/:id` | Update student |
| POST | `/delete/:id` | Delete student |

## 🧪 Testing

This project includes a robust testing setup to ensure all functionalities are working as expected.

### ✅ Types of Tests

| Test Type     | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| Unit Tests    | Test individual logic components like controllers or helper functions       |
| Integration   | Test combined parts like route handlers and database interactions           |
| API Tests     | End-to-end tests verifying API endpoints using Supertest                    |

---

### 🧰 Tools Used

- **Jest** – JavaScript testing framework
- **Supertest** – HTTP assertions for testing Express.js routes  
- **mongodb-memory-server** (optional) – For in-memory DB testing

---

### 📦 File Structure of Tests

```
tests/
├── student.unit.test.js         # Tests business logic independently
├── student.integration.test.js  # Tests full route and DB flow
└── student.api.test.js          # Tests API endpoints using Supertest
```

---

### ▶️ Running Tests

Make sure MongoDB is either mocked (for unit tests) or running (for integration/API tests):

```bash
npm test
```

For code coverage report:

```bash
npm test -- --coverage
```

### 📊 Test Coverage Report

After running `npm test -- --coverage`, a detailed HTML report will be generated under the `coverage/` folder. Open it in your browser:

```bash
open coverage/lcov-report/index.html
```

### 📸 Screenshot of Test Coverage

![Test Coverage Screenshot](https://github.com/shivangisaraf/shivangisaraf/blob/main/dem.jpg)



### ✅ Sample Test Commands

```bash
# Run all tests
npm test

# Run a specific test file
npx jest tests/student.unit.test.js

# Show detailed coverage info
npm test -- --coverage

# Run tests in watch mode
npm run test:watch

# Run tests with verbose output
npm test -- --verbose
```

### ✅ Test Summary

| Test Suites | Tests Run | Status        | Coverage          |
|-------------|-----------|---------------|-------------------|
| 3 total     | 5 total   | ✅ All pass   | ~53% overall (improvable) |

**💡 Tip:** Aim for >80% coverage in production-ready systems.

---

### 🔧 Test Environment Setup

Create a `.env.test` file for test-specific environment variables:

```bash
NODE_ENV=test
MONGODB_URI=mongodb://localhost:27017/test_database
JWT_SECRET=test_jwt_secret_key
PORT=3001
```

### 📝 Writing New Tests

When adding new features, follow this testing checklist:

- [ ] Write unit tests for new functions/methods
- [ ] Add integration tests for new routes
- [ ] Include API tests for new endpoints
- [ ] Update test coverage thresholds if needed
- [ ] Document any new testing patterns or utilities

### 🚨 CI/CD Integration

Tests are automatically run on:
- Every pull request
- Before deployment to staging/production
- Nightly builds for regression testing

```yaml
# Example GitHub Actions workflow
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test -- --coverage
```

## EJS Templates

### Basic Template Structure

Create these EJS files in the `views/` directory:

**views/index.ejs** - Main page
```html
<!DOCTYPE html>
<html>
<head>
    <title>Student Management</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Student Management System</h1>
    <a href="/add">Add New Student</a>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <% students.forEach(student => { %>
                <tr>
                    <td><%= student.name %></td>
                    <td><%= student.email %></td>
                    <td><%= student.course %></td>
                    <td>
                        <a href="/edit/<%= student._id %>">Edit</a>
                        <form method="POST" action="/delete/<%= student._id %>" style="display:inline;">
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
            <% }) %>
        </tbody>
    </table>
</body>
</html>
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/studentDB` |
| `PORT` | Server port number | `3000` |

## Error Handling

The application includes basic error handling for:
- MongoDB connection failures
- Invalid student IDs
- Database operation errors

For production, consider adding more robust error handling and validation.

## Security Considerations

For production deployment, consider adding:
- Input validation and sanitization
- CSRF protection
- Rate limiting
- Authentication and authorization
- HTTPS enforcement
- Environment variable validation

## Troubleshooting

**MongoDB Connection Issues**
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network connectivity for MongoDB Atlas

**Port Already in Use**
- Change the PORT in `.env` file
- Kill existing processes using the port

**Missing Dependencies**
- Run `npm install` to install all dependencies
- Check `package.json` for correct versions

**Test Issues**
- Ensure test database is separate from development database
- Check that all test dependencies are installed
- Verify MongoDB Memory Server is working correctly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. **Run tests to ensure everything works**: `npm test`
5. Test thoroughly
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
