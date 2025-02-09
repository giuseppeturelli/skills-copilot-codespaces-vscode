// Create web server
const express = require('express');
const app = express();

// Load comments
const comments = require('./comments.json');

// Serve comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});