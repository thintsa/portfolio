$(document).ready(function () {
    $('#learnmore').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#deeds').offset().top
        }, 500);
    });
});
