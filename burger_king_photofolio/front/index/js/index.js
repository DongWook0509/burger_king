$(document).ready(function() {
    var gnb = $('.gnb');

    // 마우스 over 시
    gnb.mouseenter(function() {
        $('.inner_menu').show();
        // menu bg
        var menuHeight = $('.header_inner').outerHeight();
        $('.hd_bg').css({
            'top': menuHeight + 'px',
            height: '300px'
        });
    });

    // 마우스  leave 시
    gnb.mouseleave(function() {
        $('.inner_menu').hide();
        $('.hd_bg').css('height', '0')

    });

});

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  