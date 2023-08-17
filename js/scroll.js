/**
 * スクロール量に合わせてボタンの表示・非表示を切り替えるメソッド
 */
window.addEventListener('scroll', () => {
  // 画面のスクロール量をpx（ピクセル）数で取得する
  const scrollValue = document.scrollingElement.scrollTop;
  // page-topというidを持つHTML要素を取得し、定数に代入する
  const topBtn = document.getElementById('page-top');
  // 画面のスクロール量が100px以上であれば、処理を実行する
  if (scrollValue >= 300) {
    // 取得したHTML要素のdisplayプロパティの値をinlineに変更する(条件が成り立つときの処理)
    topBtn.style.display = 'inline';
    topBtn.animate([{opacity: '0'}, {opacity: '1'}], 1200)
  }
  // 画面のスクロール量がそれ以外（100px未満）であれば、「TOPに戻る」ボタンを非表示にする
  else {
    topBtn.style.display = 'none';
  }
});
