const express = require("express");
const app = express();
const gv = require("genversion");

app.get("/:num", (req, res) => {
  function romanize(num) {
    if (isNaN(num)) return NaN;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }
  res.send(romanize(Object.values(req.params).toString()));
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/version", (req, res) => {
  gv.generate("lib/version.js", function (err, version) {
    if (err) {
      throw err;
    }
    res.send(version);
  });
});

app.listen("3001", () => {
  console.log("Server is running on port 3001!");
});
