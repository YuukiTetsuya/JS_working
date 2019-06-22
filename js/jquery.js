// input要素のname属性値からフォーカスが外れた時に未記入である場合、
$('input[name=myname]').bind('blur', function(){
  if($(this).val() === ''){
    // inputの親要素ddの中にappendでpタグを追加
  $(this).parent().append('<p class="error">&#x26a0;この項目は必ずご記入ください</p>');
}
});
