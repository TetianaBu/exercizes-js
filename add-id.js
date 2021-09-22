function addUniqueId(obj) {
  let uniqueIdentifier = { 'unique identifier': Symbol() };
  return Object.assign(uniqueIdentifier, obj);
}