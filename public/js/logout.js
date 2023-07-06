const logoutBtn = $("#logout-button");
console.log("woot");
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

logoutBtn.on("click", logout);
