// thisとattrを用いて、マウスが振れた/離れたときにsrc属性の属性値を_off/_onに切り替える
$('nav img')
.bind('mouseenter', function(){
  $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
})
.bind('mouseleave', function(){
  $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
});
