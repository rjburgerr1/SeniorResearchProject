class Data {
  constructor(db) {
    this.collection = db.collection("data100");
  }

  dataSortByAge = async (db) => {
    // Filter to find document if pre-existing, for update/creation
    await this.collection.find(); //.sort({ age: -1 });
  };
}
module.exports = Data;
