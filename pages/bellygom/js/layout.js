$(document).ready(function(){



    $('.liSub').on('mouseover',function(){

        $('.list').stop().slideDown();
    
    }).on('mouseleave',function(){


        $('.list').stop().fadeOut();

    });



    $('nav li').on('click',function(e){ 
        e.preventDefault();

        let i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

    })


});