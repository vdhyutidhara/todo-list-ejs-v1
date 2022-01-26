const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.send("Yay! it's weekend");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(3000, () => {
    console.log("Server is started at port 3000.")
})