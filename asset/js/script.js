// header
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || window.pageYOffset;
  // console.log(scrollTop)
  if (scrollTop >= 200) {
    document.querySelector('.lnb').classList.add('scroll');
  } else {
    document.querySelector('.lnb').classList.remove('scroll');
  }
});


$('.header .btn-arrow').click(function (e) { 
  e.stopPropagation();  // 클릭 이벤트가 상위로 전파되지 않도록 설정
  if ($('.header .btn-arrow').hasClass('on')) {
    $('.lnb-list').stop().slideUp();
    $('body').removeClass('blur');
    $('.header .btn-arrow').removeClass('on');
  } else {
    $('.lnb-list').stop().slideDown();
    $('body').addClass('blur');
    $('.header .btn-arrow').addClass('on');
  }
});

$(document).click(function (e) { 
  if (!$(e.target).closest('.header').length) {
    if ($('.header .btn-arrow').hasClass('on')) {
      $('.lnb-list').stop().slideUp();
      $('body').removeClass('blur');
      $('.header .btn-arrow').removeClass('on');
    }
  }
});
// footer
$('.directory-box .title').click(function (e) {
  if ($(this).parent().hasClass('active')) {
    $(this).parent().removeClass('active');
  } else {
    $('.directory-box').removeClass('active');
    $(this).parent().addClass('active');
  }
});