/**
 * Created by Oshevchuk on 20.06.2017.
 */

(function () {
    $( document ).ready(function() {

        $('.intro-content a').delay(500).animate({opacity: '1'}, 400, function () {
            $(this).addClass('anim-button');//.delay(800).animate({});


            $('.intro-content').addClass('anim-zone');
        });

        $(window).on('resize', function() {

        });

    });


})();