// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

<<<<<<< HEAD
=======
// empty request
>>>>>>> 7415a1d4039c1b4094851463cfb8884ae0ecda2f
app.get("/api/", (req, res) => {
  let now = new Date();
  res.json({ unix: now.getTime(), utc: now.toUTCString() });
});

<<<<<<< HEAD
=======
// endpoint with date
>>>>>>> 7415a1d4039c1b4094851463cfb8884ae0ecda2f
app.get("/api/:date", (req, res) => {
  let inputDate;
  if (/^[0-9]+$/.test(req.params.date)) {
    inputDate = new Date(parseInt(req.params.date));
  } else {
    inputDate = new Date(req.params.date);
  }

  if (inputDate != "Invalid Date") {
    const unix = inputDate.getTime();
    console.log(inputDate.toString());
    res.json({ unix: unix, utc: inputDate.toUTCString() });
  } else {
    res.json({ error: inputDate.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
