// nav imgセレクタに対してマウスが触れた時にattrで指定した内容のgifに変化する
$('nav img')
.bind('mouseenter', function(){
  $(this).attr('src', 'img/btn_company_on.gif');
})
.bind('mouseleave', function(){
  $(this).attr('src', 'img/btn_company_off.gif');
});
