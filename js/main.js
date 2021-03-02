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
  const element = document.body;
  const animal = document.querySelector('animal');
  element.classList.toggle('dark-mode', !wasDarkmode);
  // animal.textContent.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
  document.querySelector('animal').toggle(textContent = '🦉');
}
