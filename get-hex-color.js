function getHexadecimalColors(str) {
  return str.match(/(#[a-f0-9]{6}|#[a-f0-9]{3})\b/gi) || [];
}