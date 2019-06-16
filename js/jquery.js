// 各スライド文字を初期状態/クリック時に非表示にし、セレクタがクリックされたときのみ
// 各セレクタをスライドダウンさせる

$('.toolContent').hide();

$('#linkFile').bind('click', function(){
  $('.toolContent').hide();
  $('#menuFile').slideDown('slow');
});

$('#linkEdit').bind('click', function(){
  $('.toolContent').hide();
  $('#menuEdit').slideDown('slow');
});

$('#linkView').bind('click', function(){
  $('.toolContent').hide();
  $('#menuView').slideDown('slow');
});
