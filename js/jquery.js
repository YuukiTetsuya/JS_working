// id:toolTitleをクリック/右クリックした時、toolContentをゆっくり表示する
$('#toolTitle').bind('click', function(){
  $('#toolContent').slideDown(1000);
  $('#toolContent').fadeTo('fast', 0.5);
});
