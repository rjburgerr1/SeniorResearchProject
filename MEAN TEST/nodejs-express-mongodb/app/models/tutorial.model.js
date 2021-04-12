module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );
  var dataSchema = mongoose.Schema({
    title: String,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  dataSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  //const Tutorial = mongoose.model("tutorial", schema);
  const Data = mongoose.model("data100", dataSchema, "data100");

  return Data;
};
