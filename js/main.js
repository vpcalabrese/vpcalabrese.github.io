/* Triggers loading animations so it leaves to viewport */
$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
  }, 3000);

  $('#top').click(function () {
      $('body').scrollTop(0);
    });

  AOS.init({
      duration: 1200,
    });

});
