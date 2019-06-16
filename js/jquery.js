// 初期状態でtoolContentを表示し、slideDownを表示させる
$('#toolContent').hide();
$('#toolTitle').bind('click', function(){
  $('#toolContent').slideDown('slow');
});
