'use strict';

// 1. Sticky Header

var headroom = new Headroom(document.querySelector('#header'));

headroom.init();

document.addEventListener("DOMContentLoaded", function () {

  var bodyTag = document.querySelector('body');

  // 2. Side nav
  var navToggle = document.querySelector('.nav-toggle');

  if (navToggle) {
    var navText = navToggle.querySelector('strong');
    navToggle.onclick = function () {
      if (bodyTag.classList.contains('sidenav-opened')) {
        bodyTag.classList.remove('sidenav-opened');
        navText.innerHTML = 'Navigate';
      } else {
        bodyTag.classList.add('sidenav-opened');
        navText.innerHTML = 'Close';
      }
    };

    var closeSideNav = document.querySelector('#sidenav .close-cross');

    closeSideNav.onclick = function () {
      bodyTag.classList.remove('sidenav-opened');
      navText.innerHTML = 'Close';
    };

    var navHolder = document.querySelector('#sidenav .inner');
    navHolder.style.maxHeight = window.innerHeight + 'px';

    window.onresize = function () {
      navHolder.style.maxHeight = window.innerHeight + 'px';
    };
  }
});

// 3. Property images slider
var propertyImagesSlider = document.querySelector('#property-images-slider');
if (propertyImagesSlider) {
  tns({
    container: propertyImagesSlider,
    mode: "gallery",
    items: 1,
    controls: false,
    speed: 400,
    navContainer: "#property-images-thumbnails",
    navAsThumbnails: true
  });
}

customSelect('select');