// hoverとthisとattrを用いて、マウスが振れた/離れたときにsrc属性の属性値を_off/_onに切り替える
$('nav img').hover(function(){
  $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
}, function(){
  $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
});
