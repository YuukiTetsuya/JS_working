$('.gallery a').bind('click', function(e){
  e.preventDefault();
  $('#largeImg')
  .css({
    'position': 'absolute',
    'left':     '0',
    'top':      '0'
  })
.show();
});
