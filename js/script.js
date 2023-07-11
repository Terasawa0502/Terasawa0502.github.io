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

// Worksの画像をクリックしたときにモーダルで拡大表示する
window.addEventListener('DOMContentLoaded', function(){
  $("#works img").click(function() {
    $("#graydisplay").html($(this).prop('outerHTML'));
    $("#graydisplay").fadeIn(200);
  });
  $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut(200);
  });
});

// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
window.addEventListener('DOMContentLoaded', function(){
$('a[href^="#"]').click(function () {
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
})
});