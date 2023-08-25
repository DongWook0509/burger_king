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
        delay: 3500,
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


  $(function(){
    
    var excuted = false; //거짓을 저장 (실행이 된적이 없다)

    $(window).scroll(function(){

        if(!excuted) {//if(executed  == false) //실행된적이 없다는게 참이면 
            var threshold = $('.burgurking_youtube').offset().top - 300;
            if($(window).scrollTop() >= threshold){
                var progressRate = $('.animate_yt').attr('data-rate');
                $({percent: 0 }).animate({percent:progressRate},{
                    duration: 5500, //1.5초
                    progress : function(){
                        var now = this.percent;
                        console.log(now); // 0~60으로 바뀌는 과정이 계속 찍히고 있습니다.
                        $('.animate_yt').text(Math.ceil(now) + '만');
                    }
                }); //progress
                excuted =true; //excuted가 true로 바뀌였기때문에 조건이 참이 아니기때문에 안바뀜 
            } // if 조건문 

            if($(window).scrollTop() >= threshold){
                var progressRate = $('.animate_fb').attr('data-rate');
                $({percent: 0 }).animate({percent:progressRate},{
                    duration: 4500, //1.5초
                    progress : function(){
                        //animate 메서드 자체를 this로 받아옵니다.
                        var now = this.percent;
                        console.log(now); // 0~60으로 바뀌는 과정이 계속 찍히고 있습니다.
                        $('.animate_fb').text(Math.ceil(now) + '만');
                    }
                }); //progress
                excuted =true; //excuted가 true로 바뀌였기때문에 조건이 참이 아니기때문에 안바뀜 
            } // if 조건문 

            if($(window).scrollTop() >= threshold){
                var progressRate = $('.animate_mi').attr('data-rate');
                $({percent: 0 }).animate({percent:progressRate},{
                    duration: 4500, //1.5초
                    progress : function(){
                        var now = this.percent;
                        console.log(now); // 0~60으로 바뀌는 과정이 계속 찍히고 있습니다.
                        $('.animate_mi').text(Math.ceil(now) + '만');
                    }
                }); //progress
                excuted =true; //excuted가 true로 바뀌였기때문에 조건이 참이 아니기때문에 안바뀜 
            } // if 조건문 
         } //if(executed  == false)
    }); //$(window).scroll

        $(window).scroll(function(){
            if($(this).scrollTop()>=1000){
                $('.go_top').fadeIn();
            }else{
                $('.go_top').fadeOut();
            }
        });
    
        $('.go_top').click(function(e){
            e.preventDefault();
            $('html, body').stop().animate({scrollTop:0}, 1000);
        });
    
         //(1) const trigger = new ScrollTrigger.default();
         const trigger = new ScrollTrigger.default({
            trigger:{
                once: true,
                offset: {
                    element: {
                        x: 0,
                        y: (trigger, rect, direction) => {
                            return 0.5
                        }
                    },
                  
                }
            }
        });
       
        trigger.add('[data-trigger]')
 });



  
  