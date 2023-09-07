// ページ内リンクのスクロールをなめらかにするメソッド
window.addEventListener('DOMContentLoaded', function(e) {
  //querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        // 3. ターゲットの位置を取得
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
        let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得
        
        const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
        const offset = window.pageYOffset; // 現在のスクロール量を取得
        const gap = 50; // 固定ヘッダー分の高さ
        const target = rect + offset - gap; //最終的な位置を割り出す

        // 4. スムースにスクロール
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
  };
});

// スクロール量に合わせてボタンの表示・非表示を切り替えるメソッド
// topボタンをクリックしたら画面上部に滑らかに移動するメソッド
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

  // topボタンをクリックしたらscrollTopFunctionが起動
  topBtn.addEventListener("click", scrollTop);
  // ページ上部へスムーズに移動
  function scrollTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

});
