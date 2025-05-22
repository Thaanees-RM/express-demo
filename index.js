const express = require('express');
const app = express();

// Dynamic port for Railway or localhost fallback
const PORT = process.env.PORT || 3000;

// Root route sends JSON
app.get('/', (req, res) => {
  res.json({ name: 'welcome' });
});

// Hello route (optional)
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
