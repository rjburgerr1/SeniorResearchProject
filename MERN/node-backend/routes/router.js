const express = require("express");

const { Data } = require("../database");

const router = express.Router();

//console.log(Data.collection);
router.get("/sort-by-age", async function (req, res) {
  const data = await Data.collection.find().sort({ age: -1 }).toArray();

  res.send(data);
});

module.exports = router;

//Data.dataSortByAge(Data.collection)
