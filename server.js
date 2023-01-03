const express = require('express');
const path = require('path');

// If application uses a PORT number we don't know like Heroku it will use it's own port OR port 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
