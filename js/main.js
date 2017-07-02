/* Triggers loading animations so it leaves to viewport */
$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
  }, 3000);

});

$(function () { // this replaces document.ready
  $(window).on('load', function () {
    $('body').addClass('slow', function () {
      $(this).remove();
    });
  });
});
