function isValidIdentifier(myVar) {
  let identRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  return Boolean(myVar.match(identRegex));
}