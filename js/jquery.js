// input要素のname属性値がmynameをセレクタし、他のコントロールにフォーカスが移ったとき、値を取得する
$('input[name=myname]').bind('blur', function(){
  console.log($(this).val());
});
