const { CONST } = require("../constants/constant");

const errorHandler = (err, req, res, next) => {
  switch (res.statusCode) {
    
    case CONST.FORBIDDEN_ERROR: {
      res.json({ message: err.message, isSuccess: false });
      break;
    }
    case CONST.SERVER_ERROR: {
      res.json({ message: err.message, isSuccess: false });
      break;
    }
    case CONST.UNAUTHORISED_ACCESS_ERROR: {
      res.json({ message: err.message, isSuccess: false });
      break;
    }
    case CONST.VALIDATION_ERROR: {
      res.json({ message: err.message, isSuccess: false });
      break;
    }

    default: {
      res.json({ message: "No error", isSuccess: true });
    }
  }
};

module.exports = { errorHandler };
