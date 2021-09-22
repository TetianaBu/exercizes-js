function getAllUrlsFromText(str) {
  if (!str) {
    return 'error';
  }
  return str.match(/https?:\/\/([\w./])+/gi) || [];
}
