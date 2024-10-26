$(document).ready(function() {
    $('#navbar-toggle').click(function() {
        $('#navbar-menu').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 425) {
            $('#navbar-menu').show();
        } else {
            $('#navbar-menu').hide();
        }
    }).resize();
});