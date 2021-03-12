$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 3000);
});

//Dark mode
function darkmode() {
  const element = document.body
  element.classList.toggle('dark-mode');
}

function darkAnimal() {
  var elem = document.getElementById("animal");
    if (elem.className === "animal") {
      elem.className = "dark-animal";
    } else {
      elem.className = "animal";
    }
}

function darkArticle() {
  var elem = document.getElementById("article");
    if (elem.className === "articles") {
      elem.className = "dark-article";
    } else {
      elem.className = "articles";
    }
}

function enableDarkMode() {
  darkAnimal();
  darkmode();
  darkArticle();
}
 const btn = document.querySelector('#flexSwitchCheckChecked');
 btn.addEventListener('click', enableDarkMode);
