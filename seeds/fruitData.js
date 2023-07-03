const { Fruit } = require("../models");
const Sequelize = require("../config/connection");
const seedFruit = async () => {
  await Sequelize.sync({ force: true });
  const fruityViceResponse = await fetch(
    "https://fruityvice.com/api/fruit/all"
  );
  const fruityViceData = await fruityViceResponse.json();
  const fruitData = [];
  const randIndex = Math.floor(Math.random() * fruityViceData.length);
  for (let i = 0; i < fruityViceData.length; i++) {
    const extFruitData = fruityViceData[i];
    fruitData.push({
      name: extFruitData.name,
      family: extFruitData.family,
      order: extFruitData.order,
      fruit_of_the_day: randIndex == i,
      genus: extFruitData.genus,
      calories: extFruitData.nutritions.calories,
      fat: extFruitData.nutritions.fat,
      sugar: extFruitData.nutritions.sugar,
      carbohydrates: extFruitData.nutritions.carbohydrates,
      protein: extFruitData.nutritions.protein,
    });
  }
  await Fruit.bulkCreate(fruitData);
};
seedFruit();
module.exports = seedFruit;
