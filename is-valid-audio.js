function isValidAudioFile(name) {
  let identRegex = /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/;
  return Boolean(name.match(identRegex));
}