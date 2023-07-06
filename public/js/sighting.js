const fruitSelection = $("#fruit-selection");

// This function dynamically populates the picklist with all the fruit from the database
const init = async () => {
  try {
    const response = await fetch("api/fruit", {
      method: "GET",
    });
    const fruitData = await response.json();
    for (let i = 0; i < fruitData.length; i++) {
      let newFruit = $("<option>");
      newFruit.attr("value", fruitData[i].value);
      newFruit.text(fruitData[i].label);
      fruitSelection.append(newFruit);
    }
  } catch (err) {
    console.log(err);
  }
};

// POST request to add a new sighting to the database
const handleSightingSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("api/sighting", {
      method: "POST",
      body: JSON.stringify({
        fruitId: fruitSelection.val(),
        locationName: $("#sighting-location").val(),
        locationCity: $("#sighting-city").val(),
        locationState: $("#sighting-state").val(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    const sightingPostData = await response.json();
    if (response.ok) {
      document.location.replace("/");
    }
  } catch (err) {
    console.log(err);
  }
};

$("#sighting-post-form").on("submit", handleSightingSubmit);
init();
