const express = require('express');
const app = express();
const PORT = 3000;

// Hello route
app.get('/hello', (req, res) => {
  res.send('Hello from Express.js!');
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
