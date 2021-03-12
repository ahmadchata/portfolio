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

function enableDarkMode() {
  darkAnimal();
  darkmode();
}
 const btn = document.querySelector('#flexSwitchCheckChecked');
 btn.addEventListener('click', enableDarkMode);
