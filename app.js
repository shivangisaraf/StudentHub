const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/student');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', studentRoutes);

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/studentDB')
    .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => {
        console.log(`Server running at Port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
}

module.exports = app;
