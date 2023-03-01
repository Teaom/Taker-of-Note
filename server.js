const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true}));
app.use(express.json());
app.use(express.static('public'));

const noteRoutes = require('./Routes/notesRoutes');
const userRoutes = require('./Routes/userRoutes');

app.listen(PORT, () => 
console.log ('Listening on PORT: ${PORT}'));
