


$(document).ready(function() {

  $(window).scroll(function() {

    var width = $(window).width();
    var height = $(window).height();


    // 1280px ~ (PC)
    if(width >= 1440) {

      // 첫번쨰 섹션 스크롤
      if($(this).scrollTop()>=0 && $(this).scrollTop()<980) {
        $("#scroll_btn ul .scb1").css({"width":"19px","border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb1").css({"backgroundColor" : "#2eceb6"});

        $('.section.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
        });

      } else {
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
          $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
          $('.section.active [data-aos]').each(function(){
            $(this).removeClass("aos-animate")
          });
        }
      }

      // 두번쨰 섹션 스크롤
      if($(this).scrollTop()>=980 && $(this).scrollTop()<1960) {
        $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb2").css({"backgroundColor" : "#2eceb6"});

        // progress 애니메이션
        $(function(){
          var perNum = 75;
          $('.second.circle').circleProgress({
            value: perNum/100,
            startAngle:100,
            size:200,
            fill:{
              gradient:["#14bab8","#32d2b5","#32d2b5","#14bab8"],
              gradientAngle: Math.PI / 2
            },
            animation:{
              duration:2200,
              easing:"swing"
            },
            lineCap : "round",
            reverse:true,
            emptyFill: "transparent",
            }).on('circle-animation-progress');
          });

      } else {
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
        }
      }
    
      // 세번쨰 섹션 스크롤
      if($(this).scrollTop()>=1960 && $(this).scrollTop()<2940) {
        $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
        $("#scroll_btn ul .scb3").css({"backgroundColor" : "#fff"});
        $('section>div.section03>div.img>div.imgWrap>img.hand').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.count').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.zero').addClass('display');
        $('section>div.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>img.money').addClass('effect');


      } else {
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
          $('section>div.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.count').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.zero').removeClass('display');
          $('section>div.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>img.money').removeClass('effect');
        }
      }
    
      // 네번쨰 섹션 스크롤
      if($(this).scrollTop()>=2940 && $(this).scrollTop()<3500) {
        $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
        $("#scroll_btn ul .scb4").css({"backgroundColor" : "#fff"});

      } else {
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
        }
      }
    
      // 다섯번쨰 섹션 스크롤
      if($(this).scrollTop()>=3500) {
        $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb5").css({"backgroundColor" : "#2eceb6"});

      } else {
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
        }
      }

    } 




    // 1280px ~ 1440px (작은PC)
    else if((width >= 1280) && (width < 1440)) {


      // 세로 900이상
      if(height >= 900) {
        // 첫번쨰 섹션 스크롤
        if($(this).scrollTop()>=0 && $(this).scrollTop()<980) {
          $("#scroll_btn ul .scb1").css({"width":"19px","border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "#2eceb6"});

          $('.section.active [data-aos]').each(function(){
            $(this).addClass("aos-animate")
          });
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
            $('.section.active [data-aos]').each(function(){
              $(this).removeClass("aos-animate")
            });
          }
        }

        // 두번쨰 섹션 스크롤
        if($(this).scrollTop()>=980 && $(this).scrollTop()<1960) {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "#2eceb6"});
          // progress 애니메이션
          $(function(){
            var perNum = 75;
            $('.second.circle').circleProgress({
              value: perNum/100,
              startAngle:100,
              size:200,
              fill:{
                gradient:["#14bab8","#32d2b5","#32d2b5","#14bab8"],
                gradientAngle: Math.PI / 2
              },
              animation:{
                duration:2200,
                easing:"swing"
              },
              lineCap : "round",
              reverse:true,
              emptyFill: "transparent",
              }).on('circle-animation-progress');
            });

        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
          }
        }
    
        // 세번쨰 섹션 스크롤
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<2940) {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "#fff"});
          $('section>div.section03>div.img>div.imgWrap>img.hand').addClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.count').addClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.zero').addClass('display');
          $('section>div.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
          $('section>div.section03>div.img>div.imgWrap>img.money').addClass('effect');
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
            $('section>div.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
            $('section>div.section03>div.img>div.imgWrap>p.count').removeClass('effect');
            $('section>div.section03>div.img>div.imgWrap>p.zero').removeClass('display');
            $('section>div.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
            $('section>div.section03>div.img>div.imgWrap>img.money').removeClass('effect');
          }
        }
    
        // 네번쨰 섹션 스크롤
        if($(this).scrollTop()>=2940 && $(this).scrollTop()<3500) {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "#fff"});
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
          }
        }
    

        // 다섯번쨰 섹션 스크롤
        if($(this).scrollTop()>=3500) {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "#2eceb6"});
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
          }
        }
      } 
      // 세로 900미만
      else if(height < 900) {
        // 첫번쨰 섹션 스크롤
        if($(this).scrollTop()>=0 && $(this).scrollTop()<980) {
          $("#scroll_btn ul .scb1").css({"width":"19px","border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "#2eceb6"});

          $('.section.active [data-aos]').each(function(){
            $(this).addClass("aos-animate")
          });
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
            $('.section.active [data-aos]').each(function(){
              $(this).removeClass("aos-animate")
            });
          }
        }

        // 두번쨰 섹션 스크롤
        if($(this).scrollTop()>=980 && $(this).scrollTop()<1960) {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "#2eceb6"});
          // progress 애니메이션
          $(function(){
            var perNum = 75;
            $('.second.circle').circleProgress({
              value: perNum/100,
              startAngle:100,
              size:200,
              fill:{
                gradient:["#14bab8","#32d2b5","#32d2b5","#14bab8"],
                gradientAngle: Math.PI / 2
              },
              animation:{
                duration:2200,
                easing:"swing"
              },
              lineCap : "round",
              reverse:true,
              emptyFill: "transparent",
              }).on('circle-animation-progress');
            });

        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
          }
        }
    
        // 세번쨰 섹션 스크롤
        if($(this).scrollTop()>=1960 && $(this).scrollTop()<2940) {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "#fff"});
          $('section>div.section03>div.img>div.imgWrap>img.hand').addClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.count').addClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.zero').addClass('display');
          $('section>div.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
          $('section>div.section03>div.img>div.imgWrap>img.money').addClass('effect');
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
            $('section>div.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
            $('section>div.section03>div.img>div.imgWrap>p.count').removeClass('effect');
            $('section>div.section03>div.img>div.imgWrap>p.zero').removeClass('display');
            $('section>div.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
            $('section>div.section03>div.img>div.imgWrap>img.money').removeClass('effect');
          }
        }
    
        // 네번쨰 섹션 스크롤
        if($(this).scrollTop()>=2940 && $(this).scrollTop()<3500) {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "#fff"});
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
          }
        }
    

        // 다섯번쨰 섹션 스크롤
        if($(this).scrollTop()>=3500) {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "#2eceb6"});
        } else {
          if($(this).scrollTop()>=1960 && $(this).scrollTop()<3920) {
            $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
            $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
          } else {
            $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
            $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
          }
        }
      }
    }



    // 1024px ~ 1280px (태블릿)
    else if((width >= 1024) && (width < 1280)) {


      // 세로 900이상
      if(height >= 900) {
        // 첫번쨰 섹션 스크롤
      if($(this).scrollTop()>=0 && $(this).scrollTop()<668) {
        $("#scroll_btn ul .scb1").css({"width":"19px","border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb1").css({"backgroundColor" : "#2eceb6"});
        $('.section.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
        });

      } else {
        if($(this).scrollTop()>=1336 && $(this).scrollTop()<2200) {
          $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
          $('.section.active [data-aos]').each(function(){
            $(this).removeClass("aos-animate")
          });
        }
      }

      // 두번째 섹션 스크롤
      if($(this).scrollTop()>=668 && $(this).scrollTop()<1336) {
        $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb2").css({"backgroundColor" : "#2eceb6"});

        // progress 애니메이션
        $(function(){
          var perNum = 75;
          $('.second.circle').circleProgress({
            value: perNum/100,
            startAngle:100,
            size:200,
            fill:{
              gradient:["#14bab8","#32d2b5","#32d2b5","#14bab8"],
              gradientAngle: Math.PI / 2
            },
            animation:{
              duration:2200,
              easing:"swing"
            },
            lineCap : "round",
            reverse:true,
            emptyFill: "transparent",
            }).on('circle-animation-progress');
          });

      } else {
        if($(this).scrollTop()>=1336 && $(this).scrollTop()<2200) {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
        }
      }
    
      // 세번째 섹션 스크롤
      if($(this).scrollTop()>=1336 && $(this).scrollTop()<1962) {
        $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
        $("#scroll_btn ul .scb3").css({"backgroundColor" : "#fff"});
        $('section>div.section03>div.img>div.imgWrap>img.hand').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.count').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.zero').addClass('display');
        $('section>div.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>img.money').addClass('effect');

      } else {
        if($(this).scrollTop()>=1336 && $(this).scrollTop()<2200) {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
          $('section>div.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.count').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.zero').removeClass('display');
          $('section>div.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>img.money').removeClass('effect');
        }
      }
    
      // 네번째 섹션 스크롤
      if($(this).scrollTop()>=2004 && $(this).scrollTop()<2200) {
        $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
        $("#scroll_btn ul .scb4").css({"backgroundColor" : "#fff"});


      } else {
        if($(this).scrollTop()>=1336 && $(this).scrollTop()<2200) {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
        }
      }
    
      // 다섯번째 섹션 스크롤
      if($(this).scrollTop()>=2250) {
        $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb5").css({"backgroundColor" : "#2eceb6"});

      } else {
        if($(this).scrollTop()>=1336 && $(this).scrollTop()<2200) {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
        }
      }

      // 세로 900미만
      } else if (height < 900) {
        

        // 첫번쨰 섹션 스크롤
      if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
        $("#scroll_btn ul .scb1").css({"width":"19px","border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb1").css({"backgroundColor" : "#2eceb6"});
        $('.section.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
        });

      } else {
        if($(this).scrollTop()>=1308 && $(this).scrollTop()<2616) {
          $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb1").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb1").css({"backgroundColor" : "transparent"});
          $('.section.active [data-aos]').each(function(){
            $(this).removeClass("aos-animate")
          });
        }
      }

      // 두번째 섹션 스크롤
      if($(this).scrollTop()>=654 && $(this).scrollTop()<1308) {
        $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb2").css({"backgroundColor" : "#2eceb6"});

        // progress 애니메이션
        $(function(){
          var perNum = 75;
          $('.second.circle').circleProgress({
            value: perNum/100,
            startAngle:100,
            size:200,
            fill:{
              gradient:["#14bab8","#32d2b5","#32d2b5","#14bab8"],
              gradientAngle: Math.PI / 2
            },
            animation:{
              duration:2200,
              easing:"swing"
            },
            lineCap : "round",
            reverse:true,
            emptyFill: "transparent",
            }).on('circle-animation-progress');
          });

      } else {
        if($(this).scrollTop()>=1336 && $(this).scrollTop()<2616) {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb2").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb2").css({"backgroundColor" : "transparent"});
        }
      }
    
      // 세번째 섹션 스크롤
      if($(this).scrollTop()>=1308 && $(this).scrollTop()<1962) {
        $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
        $("#scroll_btn ul .scb3").css({"backgroundColor" : "#fff"});
        $('section>div.section03>div.img>div.imgWrap>img.hand').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.count').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.zero').addClass('display');
        $('section>div.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>img.money').addClass('effect');

      } else {
        if($(this).scrollTop()>=1308 && $(this).scrollTop()<2616) {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb3").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb3").css({"backgroundColor" : "transparent"});
          $('section>div.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.count').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.zero').removeClass('display');
          $('section>div.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>img.money').removeClass('effect');
        }
      }
    
      // 네번째 섹션 스크롤
      if($(this).scrollTop()>=1962 && $(this).scrollTop()<2616) {
        $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
        $("#scroll_btn ul .scb4").css({"backgroundColor" : "#fff"});


      } else {
        if($(this).scrollTop()>=1308 && $(this).scrollTop()<2616) {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb4").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb4").css({"backgroundColor" : "transparent"});
        }
      }
    
      // 다섯번째 섹션 스크롤
      if($(this).scrollTop()>=2616) {
        $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
        $("#scroll_btn ul .scb5").css({"backgroundColor" : "#2eceb6"});

      } else {
        if($(this).scrollTop()>=1308 && $(this).scrollTop()<2616) {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #fff", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
        } else {
          $("#scroll_btn ul .scb5").css({"width":"19px","transition":"0.8s", "border" : "2px solid #2eceb6", "border-radius" : "4px"});
          $("#scroll_btn ul .scb5").css({"backgroundColor" : "transparent"});
        }
      }
      }
      
    }
    
    
    
    // 320px ~ 1023.9px (모바일)
    else if((width >= 320) && (width <= 1023.9)) {


      let seco1 = $( '#section01' ).offset().top;
      let seco2 = $( '#section02' ).offset().top;
      let seco3 = $( '#section03' ).offset().top;
      let seco4 = $( '#section04' ).offset().top;
      let seco5 = $( '#section05' ).offset().top;

      console.log("seco1 " + seco1);
      console.log("seco2 " + seco2)
      console.log("seco3 " + seco3)
      console.log("seco4 " + seco4)
      console.log("seco5 " + seco5)


      // 첫번쨰 섹션 스크롤
      if($(this).scrollTop()>=0 && $(this).scrollTop()<808) {
        $('.section.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
        });

      }  else {
          $('.section.active [data-aos]').each(function(){
            $(this).removeClass("aos-animate")
          });
        }
      }

      // 두번째 섹션 스크롤
      if($(this).scrollTop()>=808 && $(this).scrollTop()<1616) {

        // progress 애니메이션
        $(function(){
          var perNum = 75;
          $('.second.circle').circleProgress({
            value: perNum/100,
            startAngle:100,
            size:200,
            fill:{
              gradient:["#14bab8","#32d2b5","#32d2b5","#14bab8"],
              gradientAngle: Math.PI / 2
            },
            animation:{
              duration:2200,
              easing:"swing"
            },
            lineCap : "round",
            reverse:true,
            emptyFill: "transparent",
            }).on('circle-animation-progress');
          });

      } 
  
      // 세번째 섹션 스크롤
      if($(this).scrollTop()>=1616 && $(this).scrollTop()<2424) {

        $('section>div.section03>div.img>div.imgWrap>img.hand').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.count').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>p.zero').addClass('display');
        $('section>div.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
        $('section>div.section03>div.img>div.imgWrap>img.money').addClass('effect');
      } else {

          $('section>div.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.count').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>p.zero').removeClass('display');
          $('section>div.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
          $('section>div.section03>div.img>div.imgWrap>img.money').removeClass('effect');
 
      }
    
      

  });







  // 우측 스크롤바 pagination 클릭시 이동
  var seco1 = $( '#section01' ).offset().top;
  var seco2 = $( '#section02' ).offset().top;
  var seco3 = $( '#section03' ).offset().top;
  var seco4 = $( '#section04' ).offset().top;
  var seco5 = $( '#section05' ).offset().top;





  $("#scroll_btn ul .scb1").click(function() {
    console.log("seco1 " + seco1)
    window.scrollTo({
      top: seco1,
      left : 0,
      behavior : 'smooth'
    })
    // $(window).scrollTop(seco1);
    // $("html,body").animate({scrollTop:seco1},500)
  });
  $("#scroll_btn ul .scb2").click(function() {
    console.log("seco2 " +seco2)
    window.scrollTo({
      top: seco2,
      left : 0,
      behavior : 'smooth'
    })
    // $("html,body").animate({scrollTop:seco1},500)
  });
  $("#scroll_btn ul .scb3").click(function() {
    console.log("seco3 " + seco3)
    window.scrollTo({
      top: seco3,
      left : 0,
      behavior : 'smooth'
    })
    // $("html,body").animate({scrollTop:seco1},500)
  });
  $("#scroll_btn ul .scb4").click(function() {
    console.log("seco4 " + seco4)
    window.scrollTo({
      top: seco4,
      left : 0,
      behavior : 'smooth'
    })
    // $("html,body").animate({scrollTop:seco1},500)
  });
  $("#scroll_btn ul .scb5").click(function() {
    console.log("seco5 " + seco5)
    window.scrollTo({
      top: seco5,
      left : 0,
      behavior : 'smooth'
    })
    // $("html,body").animate({scrollTop:seco1},500)
  });





  // 브라우저 resize 처리
  window.addEventListener("resize", function() {
    $(window).scrollTop(0);
  })










});