function convert(...data) {
  return data.map((i) => (typeof i === 'string' ? Number(i) : i.toString()));
}