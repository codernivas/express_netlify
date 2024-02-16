const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const empSchema = new mongoose.Schema(
  {
    displayName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)


const empCollection = new mongoose.model("empcollection", empSchema)
module.exports = empCollection
