// var name = 'javaScript';
// if(name === 'JavaScript'){
//   window.alert('JavaScriptが選ばれました');
// }else if (name === 'PHP') {
//   window.alert('PHPが選ばれました');
// }
//
// // オブジェクトを利用時に初期値を設定
// var Price = function(price){
//   // プロパティを生成
//   this.tax;
//   this.price = price;
//   // 消費税込みの値段
//   this.addTax = function(){
//     this.price += Math.round(this.price * this.tax / 100);
//   };
//   // 3桁ずつ.を区切るメソッド
//   this.format = function(){
//     var s = new String(this.price);
//     var ret = '';
//     for(var i = s.length-3; i > 0; i -= 3){
//       ret = '.' + s.substr(i, 3) + ret;
//     }
//     ret = s.substr(0, i+3) + ret;
//     return ret;
//   }
// }
//
// // オブジェクトをコンストラクタで生成する
// var thisPrice = new Price(1280);
// // 消費税を5％に設定
// thisPrice.tax = 5;
// // 消費税込みの価格を呼び出し
// thisPrice.addTax();
// // 税込み価格を表示
// document.write(thisPrice.format());
