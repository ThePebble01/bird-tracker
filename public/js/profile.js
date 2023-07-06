const { log } = require("handlebars");

const logoutBtn = $("#logout-button");
// console.log("woot");
const logout = async () => {
  const response = await fetch("/api/profile/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

const init = async () => {
  try {
    const response = await fetch("api/sighting/mine", {
      method: "GET",
    });

    const userData = await response.json();
    for (let i = 0; i < userData.length; i++) {
      let newSighting = $("<li>");
      let newHeader = $("<h3>");
      let newParagraph = $("<p>");
      newSighting.addClass(["list-group-item", "p-2", "custom-feed-item"]);
      newHeader.attr("id", "feed-fruit");
      newHeader.text(userData[i].fruitName);
      newParagraph.attr("id", "feed-location");
      newParagraph.text(
        `${userData[i].locationName} in ${userData[i].city}, ${userData[i].state}`
      );

      newSighting.append(newHeader);
      newSighting.append(newParagraph);
    }
  } catch (err) {
    console.log(err);
  }
};

logoutBtn.on("click", logout);
init();
