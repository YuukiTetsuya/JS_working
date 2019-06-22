// stopメソッドで第一パラメータでtrueなら以降のキューを削除する。falseなら現時点で実行中のキューだけ削除する
// 第二パラメータで要素をその場で止める場合はfalse、止めない場合はtrue
$('#news').bind('click', function(){
  $(this).stop(true, false).fadeOut('slow');
});

// ainmateメソッドチェーンでは、FIFOでパラメータが格納されているので、格納した順に取り出す
// delayで3秒止めてフォードアウトする
$('#news')
  .css({
    'top':  '-100px'
  })
  .animate({
    'top':  '70px'
  }, 1000)
  .animate({
    'top':  '60px'
  }, 500)
  .delay(3000)
  .fadeOut('8');


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

// input要素に対してフォーカスが外れた場合、親要素の中の.errorをremoveする
$('input[name=age]')
  .bind('blur', function(){
    $(this).parent().find('.error').remove();
    // input要素の入力値が数値でない場合、.errorをaddし、親要素に対してp要素をappendする
    if(isNaN($(this).val())){
      $(this).addClass('error').parent().append('<p class="error">&#x26a0;この項目は数値でご記入ください</p>');
    }
  })
  // input要素に対してフォーカスされた時、p要素が存在すればinput要素の.errorをremove&p要素(エラーメッセージ)をremoveする
  .bind('focus', function(){
    if($(this).next() !== false){
      $(this).removeClass('error').next().remove();
    }
  });


  $('.gallery a').bind('click', function(e){
    // gallery aセレクタクリック時にeパラメータでHTMLよりjQueryを先に適用させる
    e.preventDefault();
    // 暗幕を表示させる
    $('#cover').css({
      'width':    $(window).width(),
      'height':    $(window).height()
    })
    .show();
    $('#largeImg')
    .css({
      'position': 'absolute',
      // 画面の中央を求める
      'left':     Math.floor(($(window).width() - 400) / 2) + 'px',
      'top':      $(window).scrollTop() + 30 + 'px'
    })
  　// クリックした大画像のURLを、クリックした自身のsrc属性に変換
    // find-endで#largeImg要素内のimg要素のsrc属性を変換
  .find('img').attr('src', $(this).attr('href')).end()
  .fadeIn('slow');
  });

  // 暗幕,画像をクリック時に暗幕と画像をフェードアウトする
  $('#cover, #largeImg').bind('click', function(){
    // コールバックで写真をスローでフェードアウト後、暗幕をフェードアウトする
    $('#largeImg').fadeOut('slow', function(){
      $('#largeImg, #cover').fadeOut();
    });
  });
