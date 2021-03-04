$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 1000);
});

//Dark mode
function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  const element = document.body
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  element.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}
 const btn = document.querySelector('#flexSwitchCheckChecked');
 btn.onclick = (e) => darkmode();
