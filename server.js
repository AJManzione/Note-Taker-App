// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs')

let db = require('./db/db.json');
const { randomUUID } = require('crypto');
// Sets up the Express App

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.post('/api/notes', (req, res) => {
    let newNote;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const detNotes = JSON.parse(data);
            req.body.id = randomUUID;
            detNotes.push(req.body); 


    fs.writeFile('./db/db.json', 
    JSON.stringify(detNotes, null, 4), 
    (err) => {
        err
        ? console.error(err)
        : console.info('successfully updated notes!')   
    });

    db = detNotes;
    res.json(req.body)
    res.sendFile(path.join(__dirname, + '/public' + 'api/notes.html'))
    }
})

});

app.get('/api/notes', (req, res) => {
    res.json(db)
});











app.listen(PORT, () =>  console.info(`Example app listening at http://localhost:${PORT} 🚀`));