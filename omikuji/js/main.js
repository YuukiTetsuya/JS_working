// jsのエラーチェック
'use strict';

{
  // ボタン変数
  const btn = document.getElementById('btn');

  // ボタンクリック時に、btnをhit!というテキスにする
  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶', '天国', 'ボーナス'];
    // 配列の要素数*ランダム0〜7をsに代入(0〜6)
    const n = Math.floor(Math.random() * (results.length - 2));
    const s = Math.random();
    // 5%の確率で天国を表示
    if(s < 0.05){
      btn.textContent = results[7];
      btn.parentNode.classList.add('backBlack');
      btn.parentNode.classList.remove('backBlue');
    }else if (s < 0.2 && s >= 0.05) {
      btn.textContent = results[8];
      btn.parentNode.classList.add('backBlue');
      btn.parentNode.classList.remove('backBlack');
    }else {
      btn.textContent = results[n];
      btn.parentNode.classList.remove('backBlue', 'backBlack');
    }
  });

  // ボタンクリック時に、btnをhit!というテキスにする
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  // ボタンクリック時に、btnをhit!というテキスにする
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}
