var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.send("landing");
});

app.get("/campgrounds", function (req, res) {
    var dogParks = [
        { name: "Test1", image: "" },
        { name: "Test2", image: "" },
        { name: "Test3", image: "" }
    ]
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Puppy Park Playdate Server has started!!!")
});