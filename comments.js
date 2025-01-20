// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { username: 'Todd', comment: 'lol that is so funny!' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'Bork' }
];

// Set view engine
app.set('view engine', 'pug');

// Get route
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// Listen to server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
