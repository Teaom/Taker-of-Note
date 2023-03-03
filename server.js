const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true}));
app.use(express.json());
app.use(express.static('public'));

const notesRoutes = require('./Routes/notesRoutes');
app.use(notesRoutes);
const publicRoutes = require('./Routes/publicRoutes');
app.use(publicRoutes);

app.listen(port, () => 
  console.log(`Listening on PORT: ${port}`));
