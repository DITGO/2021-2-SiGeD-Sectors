const handleSuccess = (res, data, status = 200) => {
  return res.status(status).json(data);
};

const handleError = (res, error, status = 400) => {
  return res.status(status).json(error);
};

const handleInvalidId = (res) => {
  return handleError(res, 'Invalid ID');
};

const handleValidationError = (res, errors) => {
  return handleError(res, errors, 400);
};


module.exports = { handleSuccess, handleError, handleInvalidId, handleValidationError };
