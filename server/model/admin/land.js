const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    url: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Land', schema);
