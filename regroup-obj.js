function regroupObject({ name: firstName, details: { university, id, age } }) {
  return {
    university,
    user: {
      id,
      age,
      firstName
    }
  };
}