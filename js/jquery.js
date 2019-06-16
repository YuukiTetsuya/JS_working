// toolTitleをクリック時のdisplayを表示非表示に設定

$('#toolTitle ').bind('click', function(){
  $('#toolContent').slideToggle();
  $('#toolContent :last').html('こんにちは');
});

// $('#toolTitle').bind('click', function(){
//   if($('#toolContent').css('display') !== 'none'){
//     $('#toolContent').slideUp();
//   }else{
//     $('#toolContent').slideDown();
//   }
// });
