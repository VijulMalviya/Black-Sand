var logo = document.querySelector('nav .logo');
var menu = document.querySelector('.menu');
var menu_links = document.querySelector('.menu ul');


logo.addEventListener('click' , function(){
    
  if (menu.style.height === "40%") {
    menu.style.height = '0%';
    menu_links.style.display = 'none';
  } else {
    menu.style.height = "40%";
    menu_links.style.display = 'initial';
  }
});