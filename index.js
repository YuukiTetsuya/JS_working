// ボタンクリック時の動作
document.getElementById('btnClose').onclick = function(){
  if(confirm('閉じてよろしいでしょうか？')){
    close();
  }else{
    if(confirm('本当にいいんですか？')){
    alert('閉じるのを中止しました');
  }}
}
