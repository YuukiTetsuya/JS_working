'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ];
  // 0 ~ 4(5個)wordsの要素数をランダムにwordに代入
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  const timeLimit = 3 * 1000;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');

  function updateTarget(){
    let placeholder = '';
    for(let i = 0; i < loc; i++){
      placeholder += '_';
    }
    // _ と wordの全ての桁数をtarget代入
    target.textContent = placeholder + word.substring(loc);
  }

  window.addEventListener('click', () => {
    updateTarget();
  });

  window.addEventListener('keyup', e => {
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
