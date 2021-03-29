const url =
  "mongodb+srv://RJ:KkZPj4rSjEwXAPhz@rating-tracks-cluster.ylwln.mongodb.net/test";

const { MongoClient } = require("mongodb");
const config = require("./config.js");

const Data = require("./data-database-class");
class MongoBot {
  constructor() {
    const url = config.host;

    this.client = new MongoClient(url, { useUnifiedTopology: true });
  }
  async init() {
    await this.client.connect();
    console.log("connected");
    this.dataDB = this.client.db(config.dataDB);
    this.Data = new Data(this.dataDB);
  }
}

module.exports = new MongoBot();
