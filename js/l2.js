/**
 * Created by Oshevchuk on 28.06.2017.
 */
$(document).ready(function(){
    $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });


    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 1000
    });

    $('.scrollbar-inner').scrollbar();
});

