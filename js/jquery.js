// nav imgセレクタに対して、attrでsrcを限定して内容をonに変化される
$('nav img').bind('mouseenter', function(){
  $('nav img').attr('src', 'img/btn_company_on.gif');
});
$('nav img').bind('mouseleave', function(){
  $('nav img').attr('src', 'img/btn_company_off.gif');
})
