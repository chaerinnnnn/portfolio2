$('document').ready(function(){



    $('.menu-btn').click(function(){

        $('header').toggleClass('active');
    });


    $('nav .top li').on('mouseover',function(){
        let i = $(this).index();

        $('aside img').eq(i).fadeIn(500).siblings().fadeOut(500);
    });

    
  //클래스명
  let classNames = ['access', 'sns', 'lan', 'search'];

  $('.menu li').on('click',function(e){
    $('.closeWrap').show();
    e.preventDefault();
    let i = $(this).index();        //페이드시간1초=1000
    $('.navs').children().eq(i).fadeIn(600).css({
        'display' : 'flex'
    }).siblings().hide();


  });

  
  $('.closeWrap').on('click',function(){
    
    $('.navs').children().hide();
    $('.closeWrap').hide();
    
  })




  // click here 부분

  $('.click').click(function(){
    $(this).fadeOut();
  })

  $(window).on('scroll',function(){

    let scr = $(window).scrollTop();

    if(scr >2){
      $('.click').fadeOut();
    }



  });

  $(window).on('scroll',function(){

    let scr = $(window).scrollTop();

    if(scr >2){
      $('.clickimg').fadeOut();
    }



  });

  let scr = $(window).scrollTop();

  if(scr >2){
    $('.click').hide();
  }




});//document.ready