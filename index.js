const express = require("express");
const app = express();
const db = require("./config/db");
const route = require("./routes/route");
const api = require("./routes/api");
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/api/",api);
app.use(route);
const PORT=8000;

app.listen(PORT, () => {
    console.log(`app is working on port ${PORT}`);
})

