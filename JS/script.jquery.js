$(document).ready(function () {
  $(".icon").click(function () {
    $(this).toggleClass("fa-xmark");
    $(".nav-menu ul").slideToggle();
  });
  $(window).resize(function () {
    if (screen.width > 767) 
    $(".nav-menu ul").show();
  });
});
