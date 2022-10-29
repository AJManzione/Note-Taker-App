const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const db = require('./db/db.json');
const { randomUUID } = require('crypto');

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


app.post("/api/notes", (req, res) => {
    req.body.id = randomUUID();
    const note = req.body;
    console.log(db);
    db.push(note);
    fs.writeFileSync(
      path.join(__dirname, "/db/db.json"),
      JSON.stringify(db)
    );
    res.json(note);
  });
  

  app.delete("/api/notes/:id", function (req, res) {
    const id = req.params.id;
    for (i = 0; i < db.length; i++) {
      if (db[i].id === id) {
        db.splice(i, 1);
      }
    }
    fs.writeFileSync(
      path.join(__dirname, "/db/db.json"),
      JSON.stringify(db)
    );
    res.send(db);
  });

app.listen(PORT, () =>  console.info(`Example app listening at http://localhost:${PORT} 🚀`));