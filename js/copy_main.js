/**
 * Created by Oshevchuk on 20.06.2017.
 */

(function () {
    $(document).ready(function () {

        var lanscapeOrientation = false;
        toogleorientation();

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
            $(this).addClass('anim-button');//.animate({}, 1000, function () {
            // &('.anim-button').css('animation', 'pulse 2s infinite 1s');;
            // });//.delay(800).animate({});.('animation', 'pulse 2s infinite 1s');;
            $('.intro-content').addClass('anim-zone');

            // $('.anim-button').delay(1000).animate({}, 1000, function () {
            //     $(this).css('animation', 'pulse 2s infinite 1s');
            // });
        });

        $('.intro-content a').delay(1200).show(0, function () {
            $('.anim-button').css('animation', 'pulse 2s infinite 1s');
            ;
        });

        // document.addEventListener("orientationchange", function (event) {
        //     toogleorientation();
        // });
        window.addEventListener("orientationchange", function () {
            toogleorientation();
        });

        function toogleorientation() {
            if (screen.orientation.type == 'landscape-primary') {
                lanscapeOrientation = true;
            } else {
                lanscapeOrientation = false;
            }
            console.log(lanscapeOrientation);
        }

        $('#goMain').on('click', function () {
            // alert(1);
            $('.anim-zone').addClass('anim-zone-end');
            $('.homepage-hero-module').delay(1000).fadeOut(300, function () {
                $('.intro-content').hide();
                $('body').css('background-color', 'black');
                if (!$('body').hasClass('mobile')) {
                    $('body').css('min-width', '1024px');
                }

                // $('.second-page').show(0, function () {
                //     $('.center-content').delay(300).fadeIn(400, function () {
                //
                //     });
                // });
                $('.second-page').delay(500).fadeIn(700, function () {
                    $('.social').show();
                    $('.logo').show();
                    $('.promo').show();
                });
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

                $('.zone').hide();
                // console.log($(this).data('go'));
                switch ($(this).data('go')) {
                    case 'g2':
                        // $('#g2').stop().css('left', '37%');
                        $('#g2').animate({left: '6%', width: '46%'}, 700, function () {
                            $('#g2').find('.zone').show();
                        });
                        break;
                    case 'g4':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').animate({right: '6%', width: '46%'}, 700, function () {
                            $('#g4').find('.zone').show();
                        });
                        break;
                    case 'g3':
                        // $('#g2').stop().css('left', '37%');
                        $('#g2').animate({left: '44%', width: '14%'}, 700);
                        $('#g1').animate({left: '53%'}, 700);
                        $('#g4').animate({right: '14%', width: '14%'}, 700, function () {
                            // $('#g3').find('.zone').css('visibility', 'visible')//.show();
                            $('#g3').find('.zone').show();
                        });
                        // $('#g5').animate({right: '-10%'}, 700);
                        break;
                    case 'g5':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').animate({right: '44%', width: '14%'}, 700, function () {
                            $('#g5').find('.zone').show();
                        });
                        $('#g2').animate({left: '14%', width: '14%'}, 700);
                        $('#g1').animate({left: '24%'}, 700);
                        // $('#g3').animate({left: '-10%'}, 700);
                        break;
                }
            } else {
                // $(this).animate({width: "60%", height: '60%'}, 400);
                // if (!lanscapeOrientation) {
                //     console.log(2);
                    switch ($(this).data('go')) {
                        case 'g2':
                            $('#g2').delay(200).css({zIndex: '20'}).animate({height: '43%', top: '12%'}, 700);//, function () {
                            $('#g2').find('.zone').show();
                            break;
                        case 'g4':
                            $('#g4').delay(200).css({zIndex: '20'}).animate({height: '43%', top: '45%'}, 700);//, function () {
                            $('#g4').find('.zone').show();
                            break;
                        case 'g3':
                            $('#g3').delay(200).css({zIndex: '20'}).animate({height: '48%', top: '-16%'}, 700);//, function () {
                            $('#g3').find('.zone').show();
                            break;
                        case 'g5':
                            $('#g5').delay(200).css({zIndex: '20'}).animate({height: '43%', top: '73%'}, 700);
                            $('#g5').find('.zone').show();
                            break;
                    }
                // }else{
                //     console.log(1);
                //     switch ($(this).data('go')) {
                //         case 'g2':
                //             $('#g2').delay(200).css({zIndex: '20'}).animate({width: '43%', left: '12%'}, 700);//, function () {
                //             $('#g2').find('.zone').show();
                //             break;
                //         case 'g4':
                //             $('#g4').delay(200).css({zIndex: '20'}).animate({width: '43%', left: '45%'}, 700);//, function () {
                //             $('#g4').find('.zone').show();
                //             break;
                //         case 'g3':
                //             $('#g3').delay(200).css({zIndex: '20', width: '48%'}).animate({width: '48%'}, 700);//, function () {
                //             $('#g3').find('.zone').show();
                //             break;
                //         case 'g5':
                //             $('#g5').delay(200).css({zIndex: '20'}).animate({width: '43%', left: '73%'}, 700);
                //             $('#g5').find('.zone').show();
                //             break;
                //     }
                // }
            }
            canIddle = false;
        }).mouseleave(function () {
            // console.log($(this).data('go')+'<<');
            if (!$('body').hasClass('mobile')) {

                $('.zone').fadeOut(300);
                switch ($(this).data('go')) {
                    case 'g2':
                        // $('#g2').stop().css('left', '37%');
                        // $('#g2').find('.zone').fadeOut(200);
                        $('#g2').stop().animate({left: '21%', width: '20%'}, 200, function () {
                            // canIddle=true
                        });

                        break;
                    case 'g4':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').stop().animate({right: '21%', width: '20%'}, 200, function () {
                            // canIddle=true
                        });
                        // $('#g4').find('.zone').fadeOut(200);
                        break;
                    case 'g3':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').stop().animate({right: '21%', width: '20%'}, 200);
                        // $('#g2').animate({left: '+6%'}, 400);
                        $('#g2').stop().animate({left: '21%', width: '20%'}, 200);
                        $('#g1').stop().animate({left: '37%', width: '27%'}, 200);
                        // $('#g5').stop().animate({right: '0%'}, 200, function () {
                        // canIddle=true
                        // });
                        // $('#g3').find('.zone').fadeOut(400);
                        break;
                    case 'g5':
                        // $('#g2').stop().css('left', '37%');
                        $('#g4').stop().animate({right: '21%', width: '20%'}, 200);
                        $('#g2').stop().animate({left: '21%', width: '20%'}, 200);
                        $('#g1').stop().animate({left: '37%', width: '27%'}, 200);
                        // $('#g3').stop().animate({left: '0%'}, 200, function () {
                        // canIddle=true
                        // });

                        // $('#g5').find('.zone').fadeOut(400);
                        break;
                }


            } else {
                // $(this).animate({width: "50%", height: '50%'}, 200);
                $('.zone').hide();
                // if (!lanscapeOrientation) {
                    switch ($(this).data('go')) {
                        case 'g2':
                            $('#g2').animate({height: '33%', top: '17%'}, 200, function () {
                                $(this).css({zIndex: '15'});
                            });
                            break;
                        case 'g4':
                            $('#g4').animate({height: '33%', top: '50%'}, 200, function () {
                                $(this).css({zIndex: '15'});
                            });
                            break;
                        case 'g3':
                            $('#g3').animate({height: '33%', top: '-16%'}, 200, function () {
                                $(this).css({zIndex: '5'});
                            });
                            break;
                        case 'g5':
                            $('#g5').animate({height: '43%', top: '83%'}, 200, function () {
                                $(this).css({zIndex: '15'});
                            });
                            break;
                    }
                // }else{
                //     switch ($(this).data('go')) {
                //         case 'g2':
                //             $('#g2').animate({width: '33%', left: '17%'}, 200, function () {
                //                 $(this).css({zIndex: '15'});
                //             });
                //             break;
                //         case 'g4':
                //             $('#g4').animate({width: '33%', left: '50%'}, 200, function () {
                //                 $(this).css({zIndex: '15'});
                //             });
                //             break;
                //         case 'g3':
                //             $('#g3').animate({width: '33%', left: '-16%'}, 200, function () {
                //                 $(this).css({zIndex: '15'});
                //             });
                //             break;
                //         case 'g5':
                //             $('#g5').animate({width: '43%', left: '83%'}, 200, function () {
                //                 $(this).css({zIndex: '15'});
                //             });
                //             break;
                //     }
                //
                // }
            }
            canIddle = true;
        });

    });
})();