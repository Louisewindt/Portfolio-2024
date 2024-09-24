const hamburger = document.querySelector(".hamburger"); //div
const navMenu = document.querySelector(".navbar__menu"); //ul with all menu links
const navLink = document.querySelectorAll(".menuItem__link"); //a: all links in menu

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  //open and close menu in mobile
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  //when a menu item (a) is clicked, the mobile menu is deactivated
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


//buttons//
//CHildButton//
document.getElementById('childButton').addEventListener('click', function() {
  window.location.href = 'childPage.html';
});
//StjerneButton//
document.getElementById('buyTicketButton').addEventListener('click', function() {
  window.location.href = 'https://stjerne-attraktioner.dk/billetter/koeb-billetter/';
});

//icons to SOME//
//FB//
document.getElementById('facebookIcon').addEventListener('click', function() {
  window.location.href = 'https://www.facebook.com/VisitSonderjylland/';
});
//insta//
document.getElementById('instagramIcon').addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/destination_sonderjylland/?hl=da';
});
//youtube//
document.getElementById('youtubeIcon').addEventListener('click', function() {
  window.location.href = 'https://www.youtube.com/channel/UCVUWWiUQBkTG8hgI_73u_bw';
});