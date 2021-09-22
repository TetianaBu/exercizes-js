function getAdultAppleLovers(data) {
  const ADULT_AGE = 18;
  const filtered = filter(
    data,
    (p) => p.favoriteFruit === 'apple' && p.age >= ADULT_AGE
  );
  return map(filtered, (p) => p.name);
}