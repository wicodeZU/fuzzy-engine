// server
const express = require("express")
const dotenv = require("dotenv")

dotenv.config()
const app = express()

//pull mongodb
require("./config/db.config")

//pull in router
const home = require("./routes/home.routes")

app.use(express.json())
app.use("/create", home)

const port = process.env.PORT

app.listen(port, () => console.log(`api running on ${port}`))
