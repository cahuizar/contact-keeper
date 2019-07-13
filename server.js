const express = require('express');

const app = express();

const BASE_URL = '/api/';

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the contact keeper api' })
);

// Define Routes
app.use(`${BASE_URL}users`, require('./routes/users'));
app.use(`${BASE_URL}auth`, require('./routes/auth'));
app.use(`${BASE_URL}contacts`, require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
