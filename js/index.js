$(document).ready(function() {    


    $(window).scroll(function() {
        var scheight = $(document).scrollTop();
        var scwidth = $( window ).width();
        var height = $(window).height();
        var tastart = ($( '#tacir' ).offset().top - 500);
        var taend = ($( '#tacir' ).offset().top - 450);
        var mostart = ($( '#mocir' ).offset().top - 500);
        var moend = ($( '#mocir' ).offset().top - 450);




        if((scwidth >= 1024) && (scwidth < 1281)) {
          if(scheight > 80){
            $("header").css({"border-bottom":"1px solid #ddd"})
          } else {
            $("header").css({"border":"none"})
          }

        } else if( (scwidth >= 320) && (scwidth < 1024)) {
          if(scheight > 60){
            $("header").css({"border-bottom":"1px solid #ddd"})
          } else {
            $("header").css({"border":"none"})
          }
        }


        
        // 1024px ~ 1280px (태블릿)
        if((scwidth >= 1024) && (scwidth < 1280.9)) {
            if(height >= 900) {
                if($(this).scrollTop()>=0 && $(this).scrollTop()<668) {
                  $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                  });
                } else {
                    $('.section.active [data-aos]').each(function(){
                      $(this).removeClass("aos-animate")
                    });
                }
        
                // 두번째 섹션 스크롤
                if($(this).scrollTop()>=tastart && $(this).scrollTop()<taend) {
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
                if($(this).scrollTop()>=1100 && $(this).scrollTop()<1768) {
                  $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
                
                } else {
                  $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
                }
    
                // 세로 900미만
            } else if (height < 900) {
              
                  // 첫번쨰 섹션 스크롤
                if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                  $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                  });
                } else {
                  $('.section.active [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                  });
                }
  
                // 두번째 섹션 스크롤
                if($(this).scrollTop()>= tastart  && $(this).scrollTop()<taend  ) {
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
                if($(this).scrollTop()>=1308 && $(this).scrollTop()<1962) {
                  $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
                } else {
                  $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
                }
            }
        }



        // 320px ~ 1024px (모바일1)
         else if((scwidth >= 900) && (scwidth < 1024)) {

            // 세로 900이상
            if(height >= 850) {
              console.log("여기탐")
              console.log("height : " + height + "스크롤 위치 " + $(this).scrollTop() + "시계 시작 " + tastart + "시계 끝 " + taend + "가로 사이즈 " + scwidth)
              // 첫번쨰 섹션 스크롤
                if($(this).scrollTop()>=0 && $(this).scrollTop()<668) {
                  $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                  });
                } else {
                  $('.section.active [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                  });
                }
        
                // 두번째 섹션 스크롤
                if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
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
                if($(this).scrollTop()>=1336 && $(this).scrollTop()<2004) {
                  $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
                } else {
                  $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
                }


            // 세로 900미만
            } 

            else if (height >= 780 && height < 850) {
              // console.log("height : " + height + "스크롤 위치 " + $(this).scrollTop() + "시계 시작 " + mostart + "시계 끝 " + moend)
                  // 첫번쨰 섹션 스크롤
                if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                  $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                  });
                } else {
                  $('.section.active [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                  });
                }
  
                // 두번째 섹션 스크롤
                if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
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
                if($(this).scrollTop()>=1600 && $(this).scrollTop()<2400) {
                  $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
                
                } else {
                  $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
                }


            } else if (height < 780 && height >= 600) {
              // console.log("height : " + height + "스크롤 위치 " + $(this).scrollTop() + "시계 시작 " + mostart + "시계 끝 " + moend)
                  // 첫번쨰 섹션 스크롤
                if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                  $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                  });
                } else {
                  $('.section.active [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                  });
                }
  
                // 두번째 섹션 스크롤
                if($(this).scrollTop()>=tastart && $(this).scrollTop()<taend) {
                  // progress 애니메이션
                  console.log(scwidth)
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
                if($(this).scrollTop()>=1450 && $(this).scrollTop()<2200) {
                  console.log("여길탐")
                  $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
                
                } else {
                  $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
                }


            } else if (height < 600) {
              // console.log("height : " + height + "스크롤 위치 " + $(this).scrollTop() + "시계 시작 " + mostart + "시계 끝 " + moend)
                  // 첫번쨰 섹션 스크롤
                if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                  $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                  });
                } else {
                  $('.section.active [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                  });
                }
  
                // 두번째 섹션 스크롤
                if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
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
                if($(this).scrollTop()>=1900 && $(this).scrollTop()<2500) {
                  $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
                
                } else {
                  $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                  $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                  $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
                }
            }

        }

        else if((scwidth >= 320) && (scwidth < 900)) {
          // 세로 900이상
          if(height >= 850) {
            // 첫번쨰 섹션 스크롤
              if($(this).scrollTop()>=0 && $(this).scrollTop()<668) {
                $('.section.active [data-aos]').each(function(){
                  $(this).addClass("aos-animate")
                });
              } else {
                $('.section.active [data-aos]').each(function(){
                  $(this).removeClass("aos-animate")
                });
              }
      
              // 두번째 섹션 스크롤
              if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
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
              if($(this).scrollTop()>=1336 && $(this).scrollTop()<2004) {
                $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
              } else {
                $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
              }
          } 

          else if (height >= 780 && height < 850) {
                // 첫번쨰 섹션 스크롤
              if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                $('.section.active [data-aos]').each(function(){
                  $(this).addClass("aos-animate")
                });
              } else {
                $('.section.active [data-aos]').each(function(){
                  $(this).removeClass("aos-animate")
                });
              }

              // 두번째 섹션 스크롤
              if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
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
              if($(this).scrollTop()>=1600 && $(this).scrollTop()<2400) {
                $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
              
              } else {
                $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
              }


          } else if (height < 780 && height >= 600) {
                // 첫번쨰 섹션 스크롤
              if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                $('.section.active [data-aos]').each(function(){
                  $(this).addClass("aos-animate")
                });
              } else {
                $('.section.active [data-aos]').each(function(){
                  $(this).removeClass("aos-animate")
                });
              }

              // 두번째 섹션 스크롤
              if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
                // progress 애니메이션
                console.log(scwidth)
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
              if($(this).scrollTop()>=1450 && $(this).scrollTop()<2200) {
                console.log("여길탐")
                $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
              
              } else {
                $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
              }


          } else if (height < 600) {
                // 첫번쨰 섹션 스크롤
              if($(this).scrollTop()>=0 && $(this).scrollTop()<654) {
                $('.section.active [data-aos]').each(function(){
                  $(this).addClass("aos-animate")
                });
              } else {
                $('.section.active [data-aos]').each(function(){
                  $(this).removeClass("aos-animate")
                });
              }

              // 두번째 섹션 스크롤
              if($(this).scrollTop()>=mostart && $(this).scrollTop()<moend) {
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
              if($(this).scrollTop()>=1900 && $(this).scrollTop()<2500) {
                $('.section03>div.img>div.imgWrap>img.hand').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').addClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').addClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').addClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').addClass('effect');
              } else {
                $('.section03>div.img>div.imgWrap>img.hand').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.count').removeClass('effect');
                $('.section03>div.img>div.imgWrap>p.zero').removeClass('display');
                $('.section03>div.img>div.imgWrap>img.snsIcon').removeClass('effect');
                $('.section03>div.img>div.imgWrap>img.money').removeClass('effect');
              }
          }

      }
    })


     // 브라우저 resize 처리
    window.addEventListener("resize", function() {
      $(window).scrollTop(0);

    })


})
