// db schemas
const mongoose = require("mongoose")

const homeSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
})
const Home = mongoose.model("Home", homeSchema)
module.exports = Home
