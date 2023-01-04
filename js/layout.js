$('document').ready(function(){





$('.section1').on('mousewheel',function(e,d){

    if(d>0){}else if(d<0){
        e.preventDefault();
        $('.section2').addClass('on');

    }

});

$('.section2').on('mousewheel',function(e,d){

    if(d>0){
        $('.section2').removeClass('on')
    }else if(d<0){

       
    }

});




$('.click').click(function(e){

    e.preventDefault();
    let key = $(this).find('.key').text();


    $('.section3 .view').fadeIn();

    $('.section3 iframe').attr('src', key);

    $('.page-top').fadeOut();

});


$('.view .close_btn, .closeWrap').click(function(){
    $('.view').fadeOut();
    $('.page-top').fadeIn();
})



$('.s5_wrap .imgWrap>div').on('click',function(e){
    e.preventDefault();
    let view = $(this).parents('.section6').find('.view');
    let imgs = $(this).find('img').attr('src');

    view.fadeIn();
    view.find('figure').html(`<img src="${imgs}">`);

    let h3 = $(this).find('h3').html();
    let p = $(this).find('p').html();


    view.find('h3').html(h3);
    view.find('p').html(p);
});

$('.section5 .sub_img img').click(function(e){
    e.preventDefault();

    let h2 = $(this).siblings('h2').html();
    let p = $(this).siblings('p').html();

    let url = $(this).attr('src');
    $('.main_img').find('img').attr('src',url)
    $('.main_img').find('h2').html(h2);
    $('.main_img').find('p').html(p);


});





$(window).scroll(function(){

    let scr = $(window).scrollTop();

    if(scr > 600){
        $('.page-top').stop().fadeIn();
    }else{
        $('.page-top').stop().fadeOut();
    }

});



});//document.ready