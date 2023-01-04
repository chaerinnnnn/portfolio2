$('document').ready(function(){



    $('.menu-btn').click(function(){

        $('header').toggleClass('active');
    });


    $('nav .top li').on('mouseover',function(){
        let i = $(this).index();

        $('aside img').eq(i).fadeIn(500).siblings().fadeOut(500);
    });

    


});//document.ready