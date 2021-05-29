$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    $("h1").css("color", "#222222");
  }, 3000);
});

//Dark mode
const darkMode = () => {
  const element = document.body;
  element.classList.toggle("dark-mode");
};

const darkAnimal = () => {
  var elem = document.getElementById("animal");
  if (elem.className === "animal") {
    elem.className = "dark-animal";
  } else {
    elem.className = "animal";
  }
};

const darkArticle = () => {
  var elem = document.getElementById("article");
  if (elem.className === "articles") {
    elem.className = "dark-article";
  } else {
    elem.className = "articles";
  }
};

const enableDarkMode = () => {
  darkAnimal();
  darkMode();
  darkArticle();
};
const btn = document.querySelector("#flexSwitchCheckChecked");
btn.addEventListener("click", enableDarkMode);
