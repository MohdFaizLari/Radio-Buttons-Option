let buttonsClickHandler = (e) => {
  console.log(e.target.id, "Hey");
  let id = e.target.id;
  if (id === "first") {
    document.getElementById("firstButton").checked = true;
  } else if (id === "second") {
    document.getElementById("secondButton").checked = true;
  }

  // Writing code here for the first (Store) button!
  if (document.getElementById("firstButton").checked === true) {
    document.getElementById("first").style.border = "1px solid blue";
    document.getElementById("first").style.backgroundColor = "rgb(244,249,255)";
  } else {
    document.getElementById("first").style.border = "1px solid black";
    document.getElementById("first").style.backgroundColor = "white";
  }

  // Writing code here for the second (Store Group) button!
  if (document.getElementById("secondButton").checked === true) {
    document.getElementById("second").style.border = "1px solid blue";
    document.getElementById("second").style.backgroundColor = "rgb(244,249,255)";
  } else {
    document.getElementById("second").style.border = "1px solid black";
    document.getElementById("second").style.backgroundColor = "white";
  }
};

let pageLoadSetup = (() => {
  document
    .getElementById("first")
    .addEventListener("click", buttonsClickHandler);
  document
    .getElementById("second")
    .addEventListener("click", buttonsClickHandler);
})();
