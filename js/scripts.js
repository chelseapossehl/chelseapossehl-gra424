$(window).resize(function(){
    $height = $('.square').width();
    $test = $('h1').height();
    $calc = ($height-$test)/2;
    $('.logo').css('top', $calc);
  });