const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    var today = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = today.getDay();
    var day = "";

    if (currentDay === 6 || currentDay === 0) {
        day = weekday[currentDay];
    } else {
        day = weekday[currentDay];
    }

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: cuurent day is " + currentDay);
    // }

    res.render("list", {
        kindOfDay: day
    });
});

app.listen(3000, () => {
    console.log("Server is started at port 3000.")
})