/**
 * Created by Oshevchuk on 20.06.2017.
 */

(function () {
    $(document).ready(function () {

        if (window.navigator.userAgent.match(/Mobile/i)
            || window.navigator.userAgent.match(/iPhone/i)
            || window.navigator.userAgent.match(/iPod/i)
            || window.navigator.userAgent.match(/IEMobile/i)
            || window.navigator.userAgent.match(/Windows Phone/i)
            || window.navigator.userAgent.match(/Android/i)
            || window.navigator.userAgent.match(/BlackBerry/i)
            || window.navigator.userAgent.match(/webOS/i)) {
            document.body.className += ' mobile';
            // alert('True - Mobile - ' + navigator.userAgent);
        } else {
            // alert('False - Mobile - ' + navigator.userAgent);
        }
        if (window.navigator.userAgent.match(/Tablet/i)
            || window.navigator.userAgent.match(/iPad/i)
            || window.navigator.userAgent.match(/Nexus 7/i)
            || window.navigator.userAgent.match(/Nexus 10/i)
            || window.navigator.userAgent.match(/KFAPWI/i)) {
            document.body.className -= ' mobile';
            document.body.className += ' tablet';
            // alert('True - Tablet - ' + navigator.userAgent);
        } else {
            // alert('False - Tablet - ' + navigator.userAgent);
        }


        $('.intro-content a').delay(500).animate({opacity: '1'}, 400, function () {
            $(this).addClass('anim-button');//.delay(800).animate({});
            $('.intro-content').addClass('anim-zone');
        });

        $('#goMain').on('click', function () {
            // alert(1);
            $('.anim-zone').addClass('anim-zone-end');
            $('.homepage-hero-module').delay(1000).fadeOut(300, function () {
                $('.intro-content').hide();
                $('body').css('background-color', 'black');
                $('body').css('min-width', '1024px');

                // $('.second-page').show(0, function () {
                //     $('.center-content').delay(300).fadeIn(400, function () {
                //
                //     });
                // });
                $('.second-page').fadeIn(400);
            });

            // animate({}, 700, function () {
            //     $(this).fadeOut();
            // });
        });

        var canIddle = true;

        $('.pane').mouseenter(function () {

            if (!canIddle)
                return;

            if (!$('body').hasClass('mobile')) {

                console.log($(this).data('go'));
                switch ($(this).data('go')) {
                    case 'g2':
                        // $('#g2').stop().css('left', '37%');
                        $('#g2').animate({left: '6%', width: '46%'}, 700);
                        break;
                    case 'g4':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').animate({right: '6%', width: '46%'}, 700);
                        break;
                    case 'g3':
                        // $('#g2').stop().css('left', '37%');
                        $('#g2').animate({left: '44%', width: '14%'}, 700);
                        $('#g1').animate({left: '53%'}, 700);
                        $('#g4').animate({right: '14%', width: '14%'}, 700);
                        $('#g5').animate({right: '-10%'}, 700);
                        break;
                    case 'g5':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').animate({right: '44%', width: '14%'}, 700);
                        $('#g2').animate({left: '14%', width: '14%'}, 700);
                        $('#g1').animate({left: '26%'}, 700);
                        $('#g3').animate({left: '-10%'}, 700);
                        break;
                }
            } else {
                $(this).animate({width: "60%", height: '60%'}, 400);
            }
            canIddle = false;
        }).mouseleave(function () {
            // console.log($(this).data('go')+'<<');
            if (!$('body').hasClass('mobile')) {
                switch ($(this).data('go')) {
                    case 'g2':
                        // $('#g2').stop().css('left', '37%');
                        $('#g2').stop().animate({left: '21%', width: '20%'}, 200, function () {
                            // canIddle=true
                        });
                        break;
                    case 'g4':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').stop().animate({right: '21%', width: '20%'}, 200, function () {
                            // canIddle=true
                        });
                        break;
                    case 'g3':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').stop().animate({right: '21%', width: '20%'}, 200);
                        // $('#g2').animate({left: '+6%'}, 400);
                        $('#g2').stop().animate({left: '21%', width: '20%'}, 200);
                        $('#g1').stop().animate({left: '37%', width: '27%'}, 200);
                        $('#g5').stop().animate({right: '0%'}, 200, function () {
                            // canIddle=true
                        });
                        break;
                    case 'g5':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').stop().animate({right: '21%', width: '20%'}, 200);
                        $('#g2').stop().animate({left: '21%', width: '20%'}, 200);
                        $('#g1').stop().animate({left: '37%', width: '27%'}, 200);
                        $('#g3').stop().animate({left: '0%'}, 200, function () {
                            // canIddle=true
                        });
                        break;
                }
            } else {
                $(this).animate({width: "50%", height: '50%'}, 200);
            }
            canIddle = true;
        });

    });
})();