$('.gallery a').bind('click', function(e){
  e.preventDefault();
  $('#largeImg')
  .css({
    'position': 'absolute',
    // 画面の中央を求める
    'left':     Math.floor(($(window.).width() - 400) / 2) + 'px',
    'top':      $(window).scrollTop() + 30 + 'px'
  })
.show();
});
