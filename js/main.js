$(document).ready(function(){

    // Fixed navbar
    $(window).scroll(function(){
        if(window.pageYOffset > 100){
            $('nav').addClass('fixed-nav')
        }else{
            $('nav').removeClass('fixed-nav')
        }
    })

    // active link
    $('a.nav-link').click(function(){
        $('a.nav-link').removeClass('active-link')
        $(this).addClass('active-link')
    })

    $('.navbar-brand').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000, 'easeInOutExpo');
    })
    

});