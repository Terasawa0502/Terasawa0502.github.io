window.addEventListener('DOMContentLoaded', function(e) {
//要素を取得
const modal = document.querySelector('.js-modal'),
image1 = document.getElementById('image1'), 
image2 = document.getElementById('image2'),
image3 = document.getElementById('image3'),
environment = this.document.getElementById('environment'),
summary = this.document.getElementById('summary'),
background = this.document.getElementById('background'),
github = this.document.getElementById('github'),
point = this.document.getElementById('point'),
assignment = this.document.getElementById('assignment'),
close = document.querySelector('.js-modal-close');

image1.addEventListener('click', modalOpen1);
image2.addEventListener('click', modalOpen2);
image3.addEventListener('click', modalOpen3);

//「開くボタン」をクリックしてモーダルを開く
function modalOpen1() {
  modal.classList.add('is-active');
  environment.textContent = 'Java/Intelli J IDEA'
  summary.textContent = '';
  background.textContent = '';
  github.textContent = 'https://github.com/Terasawa0502/BlackJack';
  point.textContent = '';
  assignment.textContent = '';
}

function modalOpen2() {
  modal.classList.add('is-active');
  environment.textContent = 'Java/Android Studio'
  summary.textContent = '';
  background.textContent = '';
  github.textContent = 'https://github.com/Terasawa0502/andoroid_todolist_app';
  point.textContent = '';
  assignment.textContent = '';
}

function modalOpen3() {
  modal.classList.add('is-active');
  environment.textContent = ''
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