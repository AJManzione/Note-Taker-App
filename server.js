const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const db = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(db.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


function newNote(body, noteArr) {
    const newNote = body;
    const noteArr = [];

    body.id = noteArr[0];
    noteArr++;
    noteArr.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    ); return newNote;
}

app.post('/api/notes', (req, res) => {
    const newNote = newNote(req.body, allNotes);
    res.json(newNote);
});

function deleteNote(id, noteArr) {
    for(i = 0; i < noteArr.length; i++) {
        let note = noteArr[i];

        if(note.id == id) {
            
        }
    }
}

app.listen(PORT, () =>  console.info(`Example app listening at http://localhost:${PORT} 🚀`));