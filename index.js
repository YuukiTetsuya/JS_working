// 数字を3桁ずつカンマ区切りにするメソッド

function numberFormat(source){
  var s = new String(source);
  var ret = '';

// iに文字数から3引いた数をいれて、substrで3桁ずつ.を付加している
  for(var i = s.length-3; i > 0; i -= 3){
    ret = '.' + s.substr(i, 3) + ret;
  }
  ret = s.substr(0, i+3) + ret;

  return ret;
}

var sumPrice = numberFormat(500000*5);
var humanYen = numberFormat(2000*5);

document.write('合計金額は' + sumPrice + '円です<br>');
document.write('あなたの価値は' + humanYen + '円です<br>');
