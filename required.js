const isRequired = () => {
  throw new Error('Missing property');
};
function add(a = isRequired(), b = isRequired()) {
  return a + b;
}