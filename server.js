// Dependencies

const express = require('express');
const path = require('path');

let db = require('./db/db.json');
// Sets up the Express App

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => {
    res.json(db)
});

app.post('/api/notes', (req, res) => {

});











app.listen(PORT, () =>  console.info(`Example app listening at http://localhost:${PORT} 🚀`));