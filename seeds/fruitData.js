const { Fruit } = require("../models");

const seedFruit = async () => {
  console.log("woot fruit");
  const fruityViceResponse = await fetch(
    "https://fruityvice.com/api/fruit/all"
  );
  const fruityViceData = await fruityViceResponse.json();
  const fruitData = [];
  fruityViceData.forEach((extFruitData) => {
    fruitData.push({
      name: extFruitData.name,
      family: extFruitData.family,
      order: extFruitData.order,
      genus: extFruitData.genus,
      calories: extFruitData.nutritions.calories,
      fat: extFruitData.nutritions.fat,
      sugar: extFruitData.nutritions.sugar,
      carbohydrates: extFruitData.nutritions.carbohydrates,
      protein: extFruitData.nutritions.protein,
    });
  });
  console.log(fruitData[0]);
  Fruit.bulkCreate(fruitData);
};
//seedFruit();
module.exports = seedFruit;
