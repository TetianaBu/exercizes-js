function isValidPassword(password) {
  return Boolean(
    password.match(/[a-z]/) &&
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.length >= 8
  );
}
