const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) => {
  return res
    .status(StatusCodes.NOT_FOUND)
    .json({ errorCode: StatusCodes.NOT_FOUND, msg: "Page Does Not Exist" });
};

module.exports = notFound;
