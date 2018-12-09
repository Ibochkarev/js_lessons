$(document).ready(function () {
  $(".main_btna, .main_btn, .main_nav a[href='#sheldure']").on("click", function () {
    $('.overlay').fadeIn(1500);
    $('.modal').slideDown(2000);
  });
  $('.close').on('click', function () {
    $('.overlay').fadeOut(1500);
    $('.modal').slideUp(2000);
  });
});