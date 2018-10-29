const express = require("express");
const app = express();
const fs = require("fs");


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));

const events = require("./public/events.json");

app.get("/", (req, res) => {
    console.log(events, JSON.stringify(events));;
    res.render('index', { events: JSON.stringify(events) });
})

app.listen(3005);