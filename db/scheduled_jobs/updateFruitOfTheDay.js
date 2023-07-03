const Fruit = require("../../models");
const Sequelize = require("sequelize");
const updateFruitOfTheDay = async () => {
  await Fruit.update(
    { fruit_of_the_day: false },
    {
      where: {
        fruit_of_the_day: true,
      },
    }
  );
  var newFruitOfTheDay = await Fruit.findAll({
    order: [Sequelize.fn("RAND")],
    limit: 1,
  });
  newFruitOfTheDay[0].do_query = true;
  await newThingToUse[0].save();
};
updateFruitOfTheDay();
