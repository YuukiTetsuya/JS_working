// input要素のname属性値からフォーカスが外れた時に未記入である場合、
$('input[name=myname]')
.bind('blur', function(){
  if($(this).val() === ''){
// input要素にerrorクラスをaddし、inputの親要素ddの中にappendでpタグを追加
  $(this).addClass('error').parent()
  .append('<p id="error">&#x26a0;この項目は必ずご記入ください</p>');
  }
})
// inputの次の要素pタグ(エラーメッセージ)が空でなければ、removeする
.bind('focus', function(){
  if($(this).next() !== false){
    $(this).removeClass('error')
    .next().remove();
  }
});
