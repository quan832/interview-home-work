const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Get", BlogSchema);
