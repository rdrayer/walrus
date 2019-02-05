$(document).ready(function() {
  $("#header-fade").click(function() {
    $("#fade").fadeIn();
  });

  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
