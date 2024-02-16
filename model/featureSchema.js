const mongoose = require("mongoose")
const featureSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    postTitle: {
      type: String,
      required: true,
    },
    postDesc: {
      type: String,
    },
  },
  { timestamps: true }
)

const featureCollection = new mongoose.model("featureCollection", featureSchema)
module.exports = featureCollection
