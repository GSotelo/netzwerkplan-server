/**
 * Native and third party modules
 */
const express = require("express");
var compression = require('compression')
const routes = require("./routes/routes");
const errorController = require("./controllers/errorController");

/**
 * Application
 */
const app = express();

/**
 * Port used when deployment in container
 */
const port = process.env.PORT || 5000;

/**
 * Parsing post requests
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Compress all responses
 */
app.use(compression());

/**
 * Use all routes instances
 */
app.use(routes);

/**
 * Error handling
 */
app.use(errorController);

/**
 * Running server
 */
app.listen(port, () => console.log('Server listening on port 5000'));