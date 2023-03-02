const express = require("express");
const router = express.Router();
const { v4: uuidv4 } =require('uuid');
const { readAndAppend, readFromFile, deleteNote} = require('../Help/fs');

router.get('/api/notes', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/api/notes', (req, res) => {
    const { title, text } =req.body;

    if (title && text) {
        const newNote ={
            id: uuidv4(),
            title,
            text
        };
        readAndAppend( newNote, './db/db.json');

        const interfaceResponse = {
            status: 'New Notes Added',
            body: newNote
        }
        res.json(interfaceResponse);
        } else {
            res.json('Error adding notes');
    }
});

module.exports = router;