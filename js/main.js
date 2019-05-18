$(document).ready(function(){
    $("#navBar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 500);
    });
});

history.pushState(' ', document.title, window.location.pathname);