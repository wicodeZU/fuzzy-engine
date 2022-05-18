// views/routes
const express = require("express")
const { createContent } = require("../controllers/home.controler")
const router = express.Router()

router.route("/").post(createContent)

module.exports = router
