/**
 * Created by Oshevchuk on 20.06.2017.
 */

// (function () {
var isGoing = false;
var isMobile = false;
var landType = 'port';
var PaneBinder=[0,0,0,0,0,0,0,];

function GoMain() {
    isGoing = true;
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
        ResizeBinder();
        $('.second-page').delay(500).fadeIn(700, function () {
            $('.social').show();
            $('.logo').show();
            $('.promo').show();

            $('body').css('overflow-x', 'scroll');
        });
    });
}

function ResizeBinder() {
    if (isGoing && !isMobile) {
        // $('span').text(x += 1);
        //aspect ration = 1.75
        var temp_width = 1024;
        temp_width = window.innerHeight * 1.75;
        if (temp_width < 1024)
            temp_width = 1024;
        $('body').css('min-width', Math.round(temp_width), 'overflow-x', 'scroll');
        $('.second-page').css('position', 'relative');

        // console.log(window.innerWidth, window.innerHeight);
    }
}

$(document).ready(function () {

    var lanscapeOrientation = false;


    if (window.navigator.userAgent.match(/Mobile/i)
        || window.navigator.userAgent.match(/iPhone/i)
        || window.navigator.userAgent.match(/iPod/i)
        || window.navigator.userAgent.match(/IEMobile/i)
        || window.navigator.userAgent.match(/Windows Phone/i)
        || window.navigator.userAgent.match(/Android/i)
        || window.navigator.userAgent.match(/BlackBerry/i)
        || window.navigator.userAgent.match(/webOS/i)) {
        document.body.className += ' mobile';
        isMobile = true;
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
        isMobile = true;
        // alert('True - Tablet - ' + navigator.userAgent);
    } else {
        // alert('False - Tablet - ' + navigator.userAgent);
    }

    if(isMobile){
        // $('.help-zone').css({zIndex:'30'});
    }


    //--------------------------------------------------------------------------
    //Go next page button animation & action
    //--------------------------------------------------------------------------
    $('.intro-content a').delay(500).animate({opacity: '1'}, 400, function () {
        $(this).addClass('anim-button');
        $('.intro-content').addClass('anim-zone');
    });
    $('.intro-content a').delay(1200).show(0, function () {
        $('.anim-button').css('animation', 'pulse 2s infinite 1s');
    });
    $('#goMain').on('click', function () {
        if (!isGoing)
            GoMain();
    });
    //-end

    //--------------------------------------------------------------------------
    //Provide device orientation for mobile devices
    //Provide 2 events to Android & Iphone/WindowsPhone device
    //--------------------------------------------------------------------------
    var mql = window.matchMedia("(orientation: portrait)");
    if (mql.matches) {
        // Portrait orientation
        landType = 'port';
    } else {
        // Landscape orientation
        landType = 'landscape-primary';
    }
    mql.addListener(function (m) {
        if (m.matches) {
            // Changed to portrait
            landType = 'port';
        }
        else {
            // Changed to landscape
            landType = 'landscape-primary';
        }
        toogleorientation();
    });

    window.addEventListener("orientationchange", function () {
        landType = screen.orientation.type;
        toogleorientation();
    });
    //------------get and set default orientation
    toogleorientation(false);
    //-end

    //--------------------------------------------------------------------------
    //when change orientarion on mobile rebuild document grid
    //--------------------------------------------------------------------------
    function toogleorientation(match) {
        if (isMobile) {
            $('.help-zone').removeClass('goDown');
            $('.help-zone').removeClass('goUp');
            $('.help-zone').removeClass('goLeft');
            $('.help-zone').removeClass('goRight');

            $('.zone').hide();
            if (landType == 'landscape-primary') {
                lanscapeOrientation = true;
                $('.pane').css({top: '0', height: '100vh'});
                $('#g2').animate({width: '33%', left: '17%'}, 200, function () {
                    $(this).css({zIndex: '15'});
                });
                $('#g4').animate({width: '33%', left: '50%'}, 200, function () {
                    $(this).css({zIndex: '15'});
                });
                $('#g3').animate({width: '33%', left: '-16%'}, 200, function () {
                    $(this).css({zIndex: '15'});
                });
                $('#g5').animate({width: '43%', left: '83%'}, 200);
                $('.center-content').hide();
                ;
            } else {
                lanscapeOrientation = false;
                $('.pane').css({height: '33', width: '100%', left: '0'});

                $('#g2').animate({height: '33%', top: '17%'}, 200, function () {
                    $(this).css({zIndex: '15'});
                });
                $('#g4').animate({height: '33%', top: '50%'}, 200, function () {
                    $(this).css({zIndex: '15'});
                });
                $('#g3').animate({height: '33%', top: '-16%'}, 200, function () {
                    $(this).css({zIndex: '5'});
                });
                $('#g5').animate({height: '43%', top: '83%'}, 200, function () {
                    $(this).css({zIndex: '15'});
                });
            }
        }
    }
    //-----------------------------------------------------------------------end


    $(window).resize(function () {
        ResizeBinder();
    });

    //-------------------------------------------------------------------------------------------------------------
    //listen mouse event for help block and show popup when $this pressed
    //when popup show -> if press on background hide popup
    //-------------------------------------------------------------------------------------------------------------
    $('.help').on('click', function () {
        $('.promo-overlay').fadeIn(300, function () {
            $('.promo').delay(300).show();
        })
    });
    $('.promo-overlay').on('click', function (e) {
        // if (!isMobile)
       // console.log($(this), e, e.target);
        if(e.target.type!='text')
            $('.promo').fadeOut(400, function () {
                $('.promo-overlay').fadeOut();
            })
    });
    //-end

    function mouseProvide() {
        // console.log(PaneBinder);
        // console.log(111);
        for (var i=0; i<PaneBinder.length; i++){
            if(PaneBinder[i]==1){
                $('.zone').hide();
                console.log('fixed');
                return;
            }
        }
    }

    var canIddle = true;

    $('.pane').hover(function () {


        // $('.pane').mouseenter(function () {

        if (!canIddle)
            return;

        if (!$('body').hasClass('mobile')) {
            mouseProvide();
            $('.zone').hide();
            // console.log($(this).data('go'));
            //--------------------------------------------------------------------------------
            //desctop mouse hover
            //--------------------------------------------------------------------------------
            switch ($(this).data('go')) {
                case 'g2':
                    // $('#g2').delay(200).animate({left: '6%', width: '46%'}, 500, function () {
                    //     $('#g2').find('.zone').show();
                    // });
                    canIddle = true;
                    $('#g2').delay(200).css({zIndex: '20'}).animate({left: '6%', width: '45%'}, 500, function () {
                        $('#g2').find('.zone').show();
                        canIddle = false;
                    });
                    // PaneBinder[2]=1;
                    break;
                case 'g4':
                    canIddle = true;
                    // $('#g4').delay(200).animate({right: '6%', width: '46%'}, 500, function () {
                    //     $('#g4').find('.zone').show();
                    // });
                    $('#g4').delay(200).css({zIndex: '20'}).animate({right: '6%', width: '45%'}, 500, function () {
                        $('#g4').find('.zone').show();
                        canIddle = false;
                    });
                    // PaneBinder[4]=1;
                    break;
                case 'g3':
                    canIddle = true;
                    //
                    // $('#g2').delay(200).animate({left: '44%', width: '14%'}, 500);
                    // $('#g1').delay(200).animate({left: '53%'}, 700);
                    // $('#g4').delay(200).animate({right: '14%', width: '14%'}, 500, function () {
                    //     // $('#g3').find('.zone').css('visibility', 'visible')//.show();
                    //     $('#g3').find('.zone').show();
                    // });
                    //

                    //new!

                    $('#g3').delay(200).css({zIndex: '20'}).animate({width: '45%'}, 500, function () {
                        $('#g3').find('.zone').show();
                        canIddle = false;
                    });
                    // PaneBinder[3]=1;

                    break;
                case 'g5':
                    canIddle = true;
                    //
                    // $('#g4').delay(200).animate({right: '44%', width: '14%'}, 500, function () {
                    //     $('#g5').find('.zone').show();
                    // });
                    // $('#g2').delay(200).animate({left: '14%', width: '14%'}, 500);
                    // $('#g1').delay(200).animate({left: '24%'}, 700);
                    $('#g5').delay(200).css({zIndex: '20'}).animate({width: '45%'}, 500, function () {
                        $('#g5').find('.zone').show();
                        canIddle = false;
                    });
                    // PaneBinder[5]=1;

                    break;
            }
        } else {
            // $(this).animate({width: "60%", height: '60%'}, 400);
            if (!lanscapeOrientation) {
                // console.log(2);
                switch ($(this).data('go')) {
                    case 'g2':
                        $('#g2').delay(200).css({zIndex: '20'}).animate({height: '43%', top: '12%'}, 700);//, function () {
                        $('#g2').find('.zone').show();

                        $('.help-zone').addClass('goDown');
                        break;
                    case 'g4':
                        $('#g4').delay(200).css({zIndex: '20'}).animate({height: '43%', top: '45%'}, 700);//, function () {
                        $('#g4').find('.zone').show();
                        $('.help-zone').addClass('goUp');
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
                // }
            } else {
                // console.log(1);
                switch ($(this).data('go')) {
                    case 'g2':
                        $('#g2').delay(200).css({zIndex: '20'}).animate({width: '43%', left: '12%'}, 700);//, function () {
                        $('#g2').find('.zone').show();

                        $('.help-zone').addClass('goLeft');
                        break;
                    case 'g4':
                        $('#g4').delay(200).css({zIndex: '20'}).animate({width: '43%', left: '45%'}, 700);//, function () {
                        $('#g4').find('.zone').show();
                        $('.help-zone').addClass('goRight');
                        break;
                    case 'g3':
                        $('#g3').delay(200).css({zIndex: '20'}).animate({width: '52%'}, 700);//, function () {
                        $('#g3').find('.zone').show();
                        break;
                    case 'g5':
                        $('#g5').delay(200).css({zIndex: '20'}).animate({width: '50%', left: '67%'}, 700);
                        $('#g5').find('.zone').show();
                        break;
                }
            }
        }
        canIddle = false;
        // }).mouseleave(function () {
    }, function () {


        // console.log($(this).data('go')+'<<');
        if (!$('body').hasClass('mobile')) {

            $('.zone').fadeOut(300);
            switch ($(this).data('go')) {
                case 'g2':
                    // $('#g2').stop().css('left', '37%');
                    // $('#g2').find('.zone').fadeOut(200);
                    // $('#g2').stop().animate({left: '21%', width: '20%'}, 200, function () {
                    // canIddle=true
                    // });
                    $('#g2').css({zIndex: '15'}).animate({left: '21%', width: '20%'}, 100, function () {
                        $('.zone').hide();
                    });
                    // PaneBinder[2]=0;
                    break;
                case 'g4':
                    // $('#g2').stop().css('left', '37%');
                    // $('#g4').stop().animate({right: '21%', width: '20%'}, 200, function () {
                    // canIddle=true
                    // });
                    // $('#g4').find('.zone').fadeOut(200);

                    $('#g4').css({zIndex: '15'}).animate({right: '21%', width: '20%'}, 100, function () {
                        $('.zone').hide();
                    });
                    // PaneBinder[4]=0;
                    break;
                case 'g3':
                    //
                    // $('#g4').stop().animate({right: '21%', width: '20%'}, 200);
                    //
                    // $('#g2').stop().animate({left: '21%', width: '20%'}, 200);
                    // $('#g1').stop().animate({left: '37%', width: '27%'}, 200);
                    //

                    $('#g3').css({zIndex: '15'}).animate({width: '25%'}, 100, function () {
                        $('.zone').hide();
                    });//, function () {
                    // PaneBinder[3]=0;
                    break;
                case 'g5':
                    // $('#g4').stop().animate({right: '21%', width: '20%'}, 200);
                    // $('#g2').stop().animate({left: '21%', width: '20%'}, 200);
                    // $('#g1').stop().animate({left: '37%', width: '27%'}, 200);

                    $('#g5').css({zIndex: '15'}).animate({width: '25%'}, 100, function () {
                        $('.zone').hide();
                    });//, function () {
                    // PaneBinder[5]=0;
                    break;
            }
            setTimeout(function () {
                $('.zone').hide();
            },110);

        } else {
            // $(this).animate({width: "50%", height: '50%'}, 200);
            $('.zone').hide();
            if (!lanscapeOrientation) {
                switch ($(this).data('go')) {
                    case 'g2':
                        $('.help-zone').removeClass('goDown');
                        $('#g2').animate({height: '33%', top: '17%'}, 200, function () {
                            $(this).css({zIndex: '15'});
                        });
                        break;
                    case 'g4':
                        $('#g4').animate({height: '33%', top: '50%'}, 200, function () {
                            $(this).css({zIndex: '15'});
                        });
                        $('.help-zone').removeClass('goUp');
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
                // }
            } else {
                switch ($(this).data('go')) {
                    case 'g2':
                        $('#g2').animate({width: '33%', left: '17%'}, 200, function () {
                            $(this).css({zIndex: '15'});
                        });
                        $('.help-zone').removeClass('goLeft');
                        break;
                    case 'g4':
                        $('#g4').animate({width: '33%', left: '50%'}, 200, function () {
                            $(this).css({zIndex: '15'});
                        });
                        $('.help-zone').removeClass('goRight');
                        break;
                    case 'g3':
                        $('#g3').animate({width: '33%', left: '-16%'}, 200, function () {
                            $(this).css({zIndex: '15'});
                        });
                        break;
                    case 'g5':
                        $('#g5').animate({width: '43%', left: '83%'}, 200, function () {
                            $(this).css({zIndex: '15'});
                        });
                        break;
                }

            }
        }
        canIddle = true;
    });

});
// })();