const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.first_number);
  var num2 = Number(req.body.second_number);

  res.send("Your result is" + (num1 + num2));
});
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var num1 = parseFloat(req.body.weight);
  var num2 = parseFloat(req.body.height);

  res.send("Your BMI is " + num1 / (num2 * num2));
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
