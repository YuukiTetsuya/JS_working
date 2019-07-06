$.ajax({
    url:  'rss.xml',
    dataType: 'xml',
    async:    true,
    success:  function(xml){
      console.log($(xml).find('channel item:eq(6) title').text());
    },
    error:  function(html){
      alert('データの読み込みに失敗しました。しばらくたってからアクセスし直してみてください。');
    }
});
