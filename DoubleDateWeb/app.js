const express = require('express');
const app = express();
const routes = require('./Routers/router.js');


//start app 
const port = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.use('/Css', express.static('Views/Css'));
app.use('/Image', express.static('Views/Images'));
app.use('/Js', express.static('Views/Js'));
//app.use('/Image', express.static('Views/Images'));
app.use(express.static(__dirname + '../Views'));


/** Déclaration du router */
app.use('/', routes);

app.listen(port, function() {
    console.log(`Server run on port ${port}`)
})