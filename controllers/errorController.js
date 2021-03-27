/**
 * Custom error handler
 */
const error = (err, req, res, next) => {
  res.status(500).send({ error: true, message: 'Oops! Something went wrong!' });
};

module.exports = error;