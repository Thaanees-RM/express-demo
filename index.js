const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON response for hello route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

// JSON response for root route
app.get('/', (req, res) => {
  res.json({ name: 'welcome' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
