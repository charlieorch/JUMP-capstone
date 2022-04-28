const express = require("express");
const app = express();
const gv = require("genversion");

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/version", (req, res) => {
  gv.generate("lib/version.js", (err, version) => {
    if (err) {
      throw err;
    }
    res.send(version);
  });
});

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
  const numStr = Object.values(req.params).toString();
  const numInt = parseInt(numStr);

  if (!isNaN(numInt)) {
    res.send(romanize(numInt));
  } else {
    res.status(404).send("Error: Page not found.");
  }
});

app.listen("3001", () => {
  console.log("Server is running on port 3001!");
});
