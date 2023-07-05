const sightingForm = $("#sighting-form");

const init = async () => {
  const response = await fetch("api/fruit", {
    method: "GET",
  });

  fruitData = await response.json();
  console.log(fruitData);
  for (let i = 0; i < fruitData.length; i++) {
    let newFruit = $("<option>");
    newFruit.attr("value", fruitData[i].value);
    newFruit.text(fruitData[i].label);

    sightingForm.append(newFruit);
  }
};

init();
