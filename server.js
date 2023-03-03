const express = require('express');
const app = express();
app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

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
