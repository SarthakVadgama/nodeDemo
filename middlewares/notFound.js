const notFound = (req, res) => {
  res.status(404).send("Sorry this route is not available.");
};

module.exports = notFound;
