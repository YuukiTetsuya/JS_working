// エラーチェック
'use strict';

// 全画像を配列に格納
{
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];

  let currentNum = 0;

  // main img のsrc属性値に画像ファイル名を代入(トップに画像表示)
  function setMainImage(image){
    document.querySelector('main img').src = image;
  }

  // main imgに指定した番号の画像をmainのimgタグのsrc属性に代入
  setMainImage(images[currentNum]);


 // 画像クリック時にli要素から現在の番号に付いているcurrentクラスをremoveする
  function removeCurrentClass(){
    document.querySelectorAll('.thumbnails li')
    [currentNum].classList.remove('current');
  }

 // 画像クリック時にli要素から現在の番号に付いているcurrentクラスをaddする
  function addCurrentClass(){
    document.querySelectorAll('.thumbnails li')
    [currentNum].classList.add('current');
  }

  // thumbnailsクラスをthumbnailsに代入
  const thumbnails = document.querySelector('.thumbnails');

  // images配列の要素名を一つずつimageに格納
  // imageの要素番号をindexで取得
  images.forEach((image, index) => {
    // liとimg要素を生成し、liとimgに代入
    const li = document.createElement('li');
    // 現在の画像番号とindexが一致していたら、currentクラスを付ける
    if(index === currentNum){
      li.classList.add('current');
    }

    // li要素クリックしたら、setMainImageを呼び出し、現在の画像を渡す
    li.addEventListener('click', () => {
      setMainImage(image);
      // currentクラスを外す
      removeCurrentClass();
      // 要素番号(index)を現在の番号に代入
      currentNum = index;
      // CurrentClassを付ける
      addCurrentClass();
    })

    const img = document.createElement('img');
    // imgタグのsrc属性値に画像を一つずつ代入
    img.src = image;
    // 生成したliの子要素にimg要素を追加し、さらにthumbnails要素の下にliを追加
    li.appendChild(img);
    thumbnails.appendChild(li);
  });

  // 進むボタン押した時に、clickイベントで現在の要素番号を++し、main画像として番号をセットする
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    removeCurrentClass();
    currentNum++;
    // 現在の画像番号が画像配列にある画像数分だったら（8）、現在番号を0に指定
    if(currentNum === images.length){
      currentNum = 0;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  // 戻るボタン押した時に、clickイベントで現在の要素番号を--し、main画像として番号をセットする
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    removeCurrentClass();
    currentNum--;
    // 現在の画像番号が0より小さいのであれば、現在番号を画像番号から1引いた数にする
    if(currentNum < 0){
      currentNum = images.length - 1;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
    next.click();
    playSlideshow();
    }, 1000);
  }

  // playボタン押下時に、playSlideshowを呼び出す
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');

  // playボタン押下時に、hiddenクラスをつけてPlayボタンを隠し、pauseからhiddenをremoveして表示する
  play.addEventListener('click', () => {
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    playSlideshow();
  });

  // 停止ボタン押下時に、hiddenクラスをremoveしてPlayボタンを表示し、pauseからhiddenをaddして隠す
  pause.addEventListener('click', () => {
    play.classList.remove('hidden');
    pause.classList.add('hidden');
    clearTimeout(timeoutId);
  });
}
