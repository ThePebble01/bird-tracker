// FRUIT API: fruityvice.com/api/fruit/{ID}

const randFruit = Math.floor(Math.random() * 90);

fetch(`https://fruityvice.com/api/fruit/${randFruit}`, { method: "GET" })
  .then((response) => response.json())
  .then(function (result) {
    console.log(result);
  });
