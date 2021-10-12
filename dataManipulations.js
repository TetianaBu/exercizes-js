function getUNR(users = []) {
  return users
    .filter((i) => i.rentHistory.length === 0 && i.currentlyRented.length === 0)
    .map((i) => i.name);
}

function getRGI(users = []) {
  return users.flatMap((i) => i.currentlyRented);
  //  return users.reduce((prevVal, nextVal ) => {
  //    return prevVal.concat(nextVal.currentlyRented);
  //  }, []);
}

function getRGN(users = [], games = []) {
  let currentlyRentedIds = users.flatMap((i) => i.currentlyRented);
  return currentlyRentedIds.map((currentlyRentedGameId) => {
    let rentedGame = games.find((game) => game.id === currentlyRentedGameId);
    return rentedGame.name;
  });
}

function getNoDuplicatseERGN(users = [], games = []) {
  let currentlyRentedIds = users.flatMap((i) => [
    ...i.currentlyRented,
    ...i.rentHistory
  ]);
  let gameNames = currentlyRentedIds.map((currentlyRentedGameId) => {
    let rentedGame = games.find((game) => game.id === currentlyRentedGameId);
    return rentedGame.name;
  });
  let clean = new Set(gameNames);
  return [...clean];
  return Array.from(clean);
}
