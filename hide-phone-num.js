function hideNumber(phoneNum) {
  return phoneNum.slice(-6).padStart(10, '*');
}