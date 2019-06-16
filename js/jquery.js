// 各スライド文字を初期状態/クリック時に非表示にし、セレクタがクリックされたときのみ
// 各セレクタをスライドダウンさせる

// thisを用いた省略コード

$('.toolContent').hide();

$('.toolTitle a').bind('click', function(){
  $('.toolContent:visible').slideUp();
  $($(this).attr('href')).slideDown();
});
