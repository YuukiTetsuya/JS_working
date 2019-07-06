$.ajax({
  url: 'http://h2o-space.com/news.html',
  dataType: 'html',
  async:    true,
  success:  function(html){
    $('#news').html(html);
  },
  error: function(html){
    alert('データの読み込みに失敗しました。しばらくたってからアクセスし直してみてください。');
  }
});
