$.ajax({
    url:  'news.json',
    dataType: 'json',
    async:    true,
    success:  function(json){
      var html = '';
      for(i in json){
        html += '<li><a href="' + json[i].link + '">' + json[i].
        title + '</a></li>';
      }
      $('#news').html('<ul>' + html + '</ul>');
    },
    error:  function(html){
      alert('データの読み込みに失敗しました。しばらくたってからアクセスし直してみてください。');
    }
});
