// input要素のname属性値からフォーカスが外れた時に未記入である場合、
$('input[name=myname]')
.bind('blur', function(){
  if($(this).val() === ''){
// input要素にerrorクラスをaddし、inputの親要素ddの中にappendでpタグを追加
  $(this).addClass('error').parent()
  .append('<p class="error">&#x26a0;この項目は必ずご記入ください</p>');
  }
})
// inputの次の要素pタグ(エラーメッセージ)が空でなければ、removeする
.bind('focus', function(){
  if($(this).next() !== false){
    $(this).removeClass('error')
    .next().remove();
  }
});

// input要素の属性値から二つ上のdd要素に対し、p要素をappendする
$('input[name=gender]').parents('dd')
.append('<p class="error">&#x26a0;この項目は必ずお選びください</p>')
.end()
.bind('change', function(){
// ラジオボタンが選択されていれば、エラーメッセージをremoveする
  if($('input[name=gender]:checked').val() !== ''){
    $(this).parents('dd').find('.error').remove();
  }
});
