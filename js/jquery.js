//プリロード処理(下記画像をあらかじめ読み込む)
$('<img>').attr('src', 'img/btn_company_on.gif');
$('<img>').attr('src', 'img/btn_product_on.gif');
$('<img>').attr('src', 'img/btn_product_on.gif');

// hoverとthisとattrを用いて、マウスが振れた/離れたときにsrc属性の属性値を_off/_onに切り替える
$('nav img').hover(function(){
  $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
}, function(){
  $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
});
