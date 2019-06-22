// input要素のname属性値が未記入である場合、コントロールをログする
$('input[name=myname]').bind('blur', function(){
  if($(this).val() == ""){
  console.log('未記入です')
};
});
