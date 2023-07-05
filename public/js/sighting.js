const fruitSelection = $("#fruit-selection");

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

const handleSightingSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("api/sighting", {
      method: "POST",
      body: JSON.stringify({
        fruitId: fruitSelection.val(),
        locationName: $("#sighting-location").val(),
        locationCity: $("#sighting-city").val(),
        locationState: $("#sighting-city").val(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    const sightingPostData = await response.json();
    alert("A sighting has been successfully added!");
    /*
      ?Navigate to the newly added sighting once a page has been fleshed out? 
      document.location.replace(
     `/api/sighting/${sightingPostData.sightingData.id}`
    );*/
  } catch (err) {
    console.log(err);
  }
};

$("#sighting-post-form").on("submit", handleSightingSubmit);
init();
