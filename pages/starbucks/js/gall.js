$(document).ready(function(){


    $('.img a').click(function(e){
        e.preventDefault();

        $('.img a').addClass('blur');
        $(this).removeClass('blur');

        let src = $(this).html();
        $('.view').fadeIn();
    
        $('.view figure').html(src);


    });


    $('.btn-close, .close-wrap').click(function(e){
        e.preventDefault();
        $('.img a').removeClass('blur');

        $('.view').fadeOut();
    })


});//시작구문