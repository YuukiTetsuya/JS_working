// nav imgセレクタに対して、attrでsrcを限定して内容をon/offに変化される
$('nav img')
.bind('mouseenter', function(){
  $('nav img').attr('src', 'img/btn_company_on.gif');
})
.bind('mouseleave', function(){
  $('nav img').attr('src', 'img/btn_company_off.gif');
});
