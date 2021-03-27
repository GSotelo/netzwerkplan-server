/**
 * Native and third party modules
 */
const fs = require("fs");
const path = require("path");
const rootPath = require("../utilities/rootPath/rootPath");

/**
 * Own modules
 */
const wrap = require("../utilities/wrap/wrap");

/**
 * Controllers
 */
exports.writeRecords = wrap(async (req, res, next) => {
  let data = JSON.stringify({ ...req.body, date: new Date() }, null, 2);
  fs.writeFile(path.join(rootPath, "database", "database.json"), data, (err) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send({ success: true })
    }
  });
});

exports.readRecords = wrap(async (req, res, next) => {
  fs.readFile(path.join(rootPath, "database", "database.json"), (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(JSON.parse(data))
    }
  });
});

