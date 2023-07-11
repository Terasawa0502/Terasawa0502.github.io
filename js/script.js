window.addEventListener('DOMContentLoaded', function () {

  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

});

window.addEventListener('DOMContentLoaded', function(){
  $("#bicycle img").click(function() {
    $("#graydisplay").html($(this).prop('outerHTML'));
    $("#graydisplay").fadeIn(200);
  });
  $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut(200);
  });
});