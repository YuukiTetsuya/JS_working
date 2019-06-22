$('.gallery a').bind('click', function(e){
  // gallery aセレクタクリック時にeパラメータでHTMLよりjQueryを先に適用させる
  e.preventDefault();
  // 暗幕を表示させる
  $('#cover').css({
    'width':    $(window).width(),
    'height':    $(window).height()
  })
  .show();
  $('#largeImg')
  .css({
    'position': 'absolute',
    // 画面の中央を求める
    'left':     Math.floor(($(window).width() - 400) / 2) + 'px',
    'top':      $(window).scrollTop() + 30 + 'px'
  })
　// クリックした大画像のURLを、クリックした自身のsrc属性に変換
$('#largeImg img').attr('src', $(this).attr('href'));
$('#largeImg').fadeIn('slow');
});

// 暗幕,画像をクリック時に暗幕と画像をフェードアウトする
$('#cover, #largeImg').bind('click', function(){
  // コールバックで写真をスローでフェードアウト後、暗幕をフェードアウトする
  $('#largeImg').fadeOut('slow', function(){
    $('#largeImg, #cover').fadeOut();
  });
});
