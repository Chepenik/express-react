const express = require('express');
const app = express();

// Your API route
app.get('/api', (req, res) => {
  res.json({ "users": ["user1", "user2", "user3", "user4"] });
});

app.listen(4500, () => {
  console.log('Server is running on port 4500');
});