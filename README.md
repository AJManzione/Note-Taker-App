
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Note Taker App

## The note taker app allows you to write, save and delete notes all on one page!

[Deployed Link](https://note-taker-dev-anthony.herokuapp.com/)

![alt](/assets/Note%20Taker.gif)

## Table of Contents
1. [General Info](#general)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#contributing)
5. [Contact](#contact) 

# General Info 
- This app was created to allow a user to hae a place to save, edit and delete notes. The motivation for this project was to create an app with the goal of deploying the application via heroku. 
- The application was a test of my ability to use express js which was used to create routes such as /notes and /notes/:id

# How it Works
- When the user makes a request on the page, like making a note. The information they provide is pushed into a json file with a generated ID. That associated id can be used to then access the item within the json file later.
- I used fs.WriteFile to change the content on the html page with the updated note, code snippet below.

``` 
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
  ```
- When a user tries to delete a note by pressing the trash icon associated with the note, the id of the specific note is retrieved and the associated content of that note is retrieved from the json file and deleted, see code snippet below

```
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
  ```


# Technologies
- HTML
- CSS
- JavaScript
- Node.js
- express.js && Heroku
- Git
- GitHub*

# Installaton
- use the app by clicking the deployed link above or
- Clone the repository 
- run "npm i" to install required dependencies 
- run server.js to load a local server 

# License
*MIT License*

# Contributing
*Ajmanzione*

# Contact: 
[GitHub](https://github.com/Ajmanzione)

# Tests:
*No tests*

# Questions:
Email: imanzioneaj@gmail.com
