class Data {
  constructor(db) {
    this.collection = db.collection("data");
  }

  dataSortByAge = async (db) => {
    console.log(db);
    // Filter to find document if pre-existing, for update/creation
    await this.collection.find().sort({ age: -1 });
  };
}
module.exports = Data;
