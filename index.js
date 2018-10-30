const express = require("express");
const app = express();


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));

const events = require("./public/events.json");

app.get("/", (___, res) => {
    console.log(events, JSON.stringify(events));;
    res.render('index', { events: JSON.stringify(events) });
})

app.listen(3005, () => {
    console.log("Listening on port 3005 - go to http://localhost:3005 to see the calendar");
});