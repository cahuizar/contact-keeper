const express = require('express');
const connectDB = require('./config/db');

const app = express();

const API_URL = '/api';

connectDB();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the contact keeper api' })
);

// Define Routes
app.use(`${API_URL}/users`, require('./routes/users'));
app.use(`${API_URL}/auth`, require('./routes/auth'));
app.use(`${API_URL}/contacts`, require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
