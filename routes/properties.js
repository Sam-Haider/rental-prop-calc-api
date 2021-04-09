const express = require("express")
const router = express.Router({ mergeParams: true })

const { addProperty } = require("../handlers/properties")

router
    .route("/property")
    .post(addProperty)

module.exports = router