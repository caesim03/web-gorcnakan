$(function() {
  $('.rotating-slider').rotatingSlider({
      slideHeight : 360,
      slideWidth : Math.min(480, document.querySelector('.rotating-slider-container' ).offsetWidth)
  });
});