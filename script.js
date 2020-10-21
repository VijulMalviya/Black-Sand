var logo = document.querySelector('nav .logo');
var menu = document.querySelector('.menu');
var menu_links = document.querySelector('.one');


logo.addEventListener('click' , function(){
    
  if (menu.style.height == "25%") {
    menu.style.height = '0%';
    menu_links.style.display = 'none';
  } else {
    menu.style.height = "25%";
    menu_links.style.display = 'block';
  }
});