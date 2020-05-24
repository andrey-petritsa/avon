$(document).ready(function() {
    $(".main-page-anchor").on("click", function(e) {
        e.preventDefault();
        var top = $("#main-page").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
    });

    $(".advantages-anchor").on("click", function(e) {
        e.preventDefault();
        var top = $("#advantage").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
    });

    $(".avon-numbers-anchor").on("click", function(e) {
        e.preventDefault();
        var top = $("#avon-numbers").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
    });

    $(".form-anchor").on("click", function(e) {
        e.preventDefault();
        var top = $("#form").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
    });
});