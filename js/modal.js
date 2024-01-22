window.addEventListener('DOMContentLoaded', function(e) {
//要素を取得
const modal = document.querySelector('.js-modal'),
image1 = document.getElementById('image1'), 
image2 = document.getElementById('image2'),
image3 = document.getElementById('image3'),
sliders = this.document.querySelectorAll('slider'),
slide = this.document.querySelectorAll('.slide'),
contents = this.document.querySelectorAll('.slide-content'),
environment = this.document.getElementById('environment'),
summary = this.document.getElementById('summary'),
background = this.document.getElementById('background'),
github = this.document.getElementById('github'),
point = this.document.getElementById('point'),
assignment = this.document.getElementById('assignment'),
close = document.querySelector('.js-modal-close');

// コンソールアプリ写真の配列
var consoleImg = ['<img src="img/console1.png" alt="テキスト">',
                  '<img src="img/console2.png" alt="テキスト">',
                  '<img src="img/console3.png" alt="テキスト">'];

image1.addEventListener('click', modalOpen1);
image2.addEventListener('click', modalOpen2);
image3.addEventListener('click', modalOpen3);

//「開くボタン」をクリックしてモーダルを開く
function modalOpen1() {
  modal.classList.add('is-active');

// slide-contentを順に取得して写真を挿入していく
  for (let i in contents) {
    if (contents.hasOwnProperty(i)) {
      contents[i].innerHTML = consoleImg[i];
    }
  }
  environment.textContent = 'Java/IntelliJ IDEA';
  summary.textContent = 'コンソール上でコンピュータ相手と遊べるBlackJackゲームができます';
  background.textContent = 'トランプを使ったアプリを作成してみたかったからです';
  // ToDo: 後でリンクにする
  github.textContent = 'https://github.com/Terasawa0502/BlackJack'; 
  point.textContent = 'トランプをランダムで表示させる仕組みを実現させるのが大変でした';
  assignment.textContent = '連続してゲームをプレイすることや複数人でのプレイを実現させてみたいです';
}

function modalOpen2() {
  modal.classList.add('is-active');
  environment.textContent = 'Java/Android Studio';
  summary.textContent = 'Android上で動作するTodoを管理するアプリを作成しました';
  background.textContent = '資格などの勉強をする際に使用するTodoアプリを自分用に作成してみたかったからです';
  github.textContent = 'https://github.com/Terasawa0502/andoroid_todolist_app';
  point.textContent = 'データベースと連動した処理を実装するのが大変でした';
  assignment.textContent = 'カレンダー機能と連携させてリマインダーのような機能を実装してみたいです';
}

function modalOpen3() {
  modal.classList.add('is-active');
  environment.textContent = '';
  summary.textContent = '';
  background.textContent = '';
  github.textContent = '';
  point.textContent = '';
  assignment.textContent = '';
}

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove('is-active');
}
close.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove('is-active');
  }
}
addEventListener('click', modalOut);

});