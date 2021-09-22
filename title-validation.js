const validateTitle = (value) => {
  if (typeof value !== 'string') {
    return 'Incorrect input data';
  }
  if (value.length < 2 || value.length > 20) {
    return 'INVALID';
  }
  if (value[0] !== value[0].toLowerCase()) {
    return 'VALID';
  }
  return 'INVALID';
};

