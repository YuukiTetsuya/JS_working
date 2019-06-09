// 選択時の挙動
document.getElementById('age').onchange = function(){
  var age = document.getElementById('age').value;

// switchを使った条件式
  switch(age){
    case '10':
      alert('10歳以下の方は、半額です');
      break;
    case '30':
      alert('11-30歳の方は割引はありません');
      break;
    case '50':
      alert('31-50歳の方は割引はありません');
      break;
    case '51':
      alert('51歳以上の方は30%の割引です');
      break;
  }

// if-elseifを使った条件式
  // if(age === '10'){
  //   alert('10歳以下の方は、半額です');
  // } else if
  //   (age === '30'){
  //   alert('11-30歳の方は割引はありません');
  // } else if
  //   (age === '50'){
  //   alert('31-50歳の方は割引はありません');
  // } else if
  //   (age === '51'){
  //   alert('51歳以上の方は30%の割引です');
  // }
}
