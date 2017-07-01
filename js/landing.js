/**
 * Created by Oshevchuk on 27.06.2017.
 */

var current = 1;
$('html, body').animate({scrollTop: 0});

var isMobile=false;

$(document).ready(function () {
    showSlides();

    // $('.test').scrollbar();
    jQuery('.scrollbar-inner').scrollbar();

    //
    // if (window.addEventListener) window.addEventListener("DOMMouseScroll", mouse_wheel, false);
    // window.onmousewheel = document.onmousewheel = mouse_wheel;
    //
    // var mouse_wheel = function(event) {
    //     if (false == !!event) event = window.event;
    //     var direction = ((event.wheelDelta) ? event.wheelDelta/120 : event.detail/-3) || false;
    //     console.log(direction);
    // };

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

});

var slideIndex = 0;
var current = 1;
function showSlides() {
    if(current==1) {

        var slides = $('.sp');// document.getElementsByClassName('slides');
        // var dots = document.getElementsByClassName('dot');

        slides.fadeOut(400);

        // for (var i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        $('.dot').removeClass("active");

        // dots
        // for (i=0; i<dots.length; i++){
        //     dots[i].className=dots[i].className.replace(" active", "");
        // }
        slides.eq(slideIndex - 1).fadeIn(400);
        $('.dot').eq(slideIndex - 1).addClass('active');

        // slides[slideIndex - 1].show();// style.display="block";
        // dots[slideIndex - 1].addClass("active");//  .className += " active";

        setTimeout(showSlides, 7000);
    }
}

var freez=false;
$('body').bind('click', function (e) {
    // if(current==0){
    //
    // console.log();
    // if(!freez) {
    //     freez = true;
    if(!isMobile) {
        if ($(e.target).data('page'))
            nextPage();
    }
        // }
    // }
});

function nextPage(b) {
    if(!isMobile) {
        b = typeof b !== 'undefined' ? b : 1;
        // console.log(b);

        $('.zone').fadeOut();
        current += b;
        if (current >= 5) {
            current = 1;
        }
        if (current <= 1) {
            current = 1;
        }
        $('html, body').animate({
            scrollTop: $('#page' + current).offset().top
        }, 1000, function () {
            // if(current==2 || current){
            $('#page' + current + ' .zone').show();
            freez = false;
            // }
        });
        if (current == 1) {
            showSlides();
        }

    }
}

// var altcrement = -1;
$(window).resize(function(){
    // var currentFontSize = parseFloat($('html').css('font-size'));
    // $('html').css('font-size', currentFontSize + (altcrement *= -1) + 'px');
    // console.log("res");
    if(!isMobile) {
        $('html, body').animate({
            scrollTop: $('#page' + current).offset().top
        }, 1);
    }
});

if(!isMobile) {
    if (window.addEventListener) {

        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            window.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            window.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            window.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        window.attachEvent("onmousewheel", onWheel);
    }
}

function onWheel(e) {
    if(!isMobile) {
        e = e || window.event;

        // wheelDelta не дает возможность узнать количество пикселей
        var delta = e.deltaY || e.detail || e.wheelDelta;

        // var info = document.getElementById('delta');

        // console.log( delta);
        if (delta > 0) {
            nextPage();
        } else {
            nextPage(-1);
        }

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    }
}

$('html').keydown(function(e){
    if(!isMobile) {

        if (e.which == 40) {
            nextPage();
        }
        if (e.which == 38) {
            nextPage(-1);
        }
    }
    // $('#keydown_con').val(e.which);
});
