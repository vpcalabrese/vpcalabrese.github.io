/* Triggers loading animations so it leaves to viewport */
$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
  }, 3000);

});

$(document).ready(function () {
  console.log('ready!');
});
