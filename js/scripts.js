$(document).ready(function() {
  $("#header-fade").click(function() {
    $("#fade").fadeIn();
  });

  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#initially-showing2").toggle();
    $("#initially-hidden1").toggle();
  })


});
