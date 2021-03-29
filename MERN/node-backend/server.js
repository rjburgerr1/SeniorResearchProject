const mongoUtil = require("./database.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 3001;
async function start() {
  try {
    await mongoUtil.init();
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}
start().then(() => {
  const router = require("./routes/router");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/data", router);

  app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
});
