const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 1000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


