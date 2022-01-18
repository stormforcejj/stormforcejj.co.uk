$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#nav',
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 200,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            //'textColor': '#fff',
            //'bulletsColor': '#fff',
            'position': 'left',
            'tooltips': ['Home', 'About Me', 'Projects', 'Contact Me', 'Portfolio', 'CV']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
    });
    $("body").fadeIn(1000);
});