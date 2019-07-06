$.ajax({
    url:  'rss.xml',
    dataType: 'xml',
    async:    true,
    success:  function(xml){
      var html = '';
      $(xml).find('channel item').each(function(){
        html += '<li><a href="' + $(this).find('link').text() +
        '">' + $(this).find('title').text() + '</a></li>';
      });
      $('#news').html('<ul>' + html + '</ul>');
    },
    error:  function(html){
      alert('データの読み込みに失敗しました。しばらくたってからアクセスし直してみてください。');
    }
});
