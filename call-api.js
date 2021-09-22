function handleErr(err) {
  console.log(err);
}

function callAPI() {
  const namePromise = fetch(`https://jsonplaceholder.typicode.com/users`);
  namePromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const names = data.map((i) => i.name).sort();
      console.log(names);
    })
    .catch(handleErr);
}

async function callAPIasync() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  const names = data.map((i) => i.name).sort();
  console.log(names);
}
