$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 2000);
});

//Dark mode
function darkmode() {
  const element = document.body
  element.classList.toggle('dark-mode');
}

function darkAnimal() {
  var elem = document.getElementById("test");
    if (elem.className === "animal") {
      elem.className = "dark-animal";
    } else {
      elem.className = "animal";
    }
  }

function enableDarkMode {
  darkmode();
  darkAnimal();
}

// function onload() {
//   element.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
// }
 const btn = document.querySelector('#flexSwitchCheckChecked');
 btn.addEventListener('click', enableDarkMode);
