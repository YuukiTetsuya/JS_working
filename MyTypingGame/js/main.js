'use strict';

{
  const words = [
    'Linux',
    'Apache',
    'MySQL',
    'PHP',
    'LAMP',
  ];

  let word
  let loc
  let score
  let miss
  const timeLimit = 30 * 1000;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  function updateTarget(){
    let placeholder = '';
    for(let i = 0; i < loc; i++){
      placeholder += '_';
    }
    // _ と wordの全ての桁数をtarget代入
    target.textContent = placeholder + word.substring(loc);
  }

  function showResult(){
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score} 正解, ${miss} ミス, ${accuracy.toFixed(2)}% 正解率`);
  }

  function updateTimer(){
    // 残り時間を計算
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    // 10ms毎にupdateTimerを呼び出す
    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    if(timeLeft < 0){
      // ゲームを終了させる
      isPlaying = false;

      clearTimeout(timeoutId);
      timerLabel.textContent = '0.00';
      setTimeout(() => {
        showResult();
      }, 100);

      timerLabel.textContent = '0.00';
      target.textContent = '[クリック]でリプレイ';
    }
  };

  window.addEventListener('click', () => {
    if(isPlaying === true){
      return;
    }
    // ゲームをスタートさせる
    isPlaying = true;

// 変数の初期値

    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;

// n個のwordsの要素数をランダムにwordに代入
    word = words[Math.floor(Math.random() * words.length)];

    updateTarget();
    startTime = Date.now();
    updateTimer();
  });

  window.addEventListener('keyup', e => {
    // ゲームが始まっていない場合は以降の処理に進めない
    if (isPlaying !== true){
      return;
    }

    console.log(e.key);
    // wordの中の0番目の文字とkeyが一致していたら
    if (e.key === word[loc]) {
      console.log('score');
      loc++;
      if(loc === word.length){
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      score++;
      scoreLabel.textContent = score;
      updateTarget();
    } else {
      console.log('miss');
      miss++;
      missLabel.textContent = miss;
    }
  });
}
