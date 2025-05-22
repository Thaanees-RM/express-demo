const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ name: 'welcome' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
