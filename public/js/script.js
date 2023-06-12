$(document).ready(function() {

    // function setIndicatorTransform(activeIndex) {
    //     const indicator = $('.indicator');
    //     const listWidth = 70;
    //     indicator.css('transform', `translateX(calc(${listWidth}px * ${activeIndex}))`);
    // }

    $('.list').on('click', function() {
        $('.list').removeClass('active');
        $(this).addClass('active');
        // const activeIndex = $(this).index();
        // setIndicatorTransform(activeIndex);
    });

    $('.tog').on('click', function() {
        $('.navigation').slideToggle();
    });

})


