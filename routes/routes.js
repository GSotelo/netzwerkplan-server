/**
 * Native and third party modules
 */
const express = require("express");

/**
 * Own modules
 */
const databaseController = require("../controllers/databaseController");

const router = express.Router();

/**
 * Routes
 */
router.post("/database/write", databaseController.writeRecords);
router.get("/database/read", databaseController.readRecords)


module.exports = router;