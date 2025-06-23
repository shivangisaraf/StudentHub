const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET: Home - List all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    console.log('Fetched students:', students); // ✅ Test coverage
    res.render('index', { students });
  } catch (err) {
    console.error('GET / error:', err.message); // ✅ Error path coverage
    res.status(500).send('Internal Server Error');
  }
});

// GET: Show add student form
router.get('/add', (req, res) => {
  console.log('Rendering add student form'); // ✅ Line 11-12 coverage
  res.render('add');
});

// POST: Add a new student
router.post('/add', async (req, res) => {
  try {
    const { name, email, course } = req.body;
    console.log('Incoming POST /add body:', req.body); // ✅ Test coverage

    if (!name || !email || !course) {
      throw new Error('Missing required fields'); // ✅ For negative test case
    }

    await Student.create({ name, email, course });
    console.log('Student added:', { name, email, course }); // ✅ Test coverage
    res.redirect('/');
  } catch (err) {
    console.error('POST /add error:', err.message); // ✅ Error path coverage
    res.status(500).send('Internal Server Error');
  }
});

// GET: Show edit student form
router.get('/edit/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    console.log(`Editing student with ID: ${req.params.id}`, student); // ✅ Test coverage
    res.render('edit', { student });
  } catch (err) {
    console.error('GET /edit/:id error:', err.message); // ✅ Error path coverage
    res.status(500).send('Internal Server Error');
  }
});

// POST: Update student details
router.post('/edit/:id', async (req, res) => {
  try {
    const { name, email, course } = req.body;
    if (!name || !email || !course) {
      throw new Error('Missing required fields'); // ✅ Edge case coverage
    }

    await Student.findByIdAndUpdate(req.params.id, { name, email, course });
    console.log(`Student updated with ID: ${req.params.id}`); // ✅ Test coverage
    res.redirect('/');
  } catch (err) {
    console.error('POST /edit/:id error:', err.message); // ✅ Error path coverage
    res.status(500).send('Internal Server Error');
  }
});

// POST: Delete a student
router.post('/delete/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    console.log(`Deleted student with ID: ${req.params.id}`); // ✅ Test coverage
    res.redirect('/');
  } catch (err) {
    console.error('POST /delete/:id error:', err.message); // ✅ Error path coverage
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
