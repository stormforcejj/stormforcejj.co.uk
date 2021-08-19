function smoothScroll() {
    windowHeight = $(window).height();
    $('html, body').stop().animate({ scrollTop: windowHeight }, "slow");
}

$('.bottom-nav').on('click', '.fold-trigger', function(event) {
    $('.home').css('overflow', 'visible');
    setTimeout(smoothScroll(), 1000);

});