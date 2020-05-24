$(".video-button").click(change_pop_up);
$(".icon-close-wrap").click(change_pop_up)

function change_pop_up() {
    $('.popup-overlay').toggleClass("disabled");
}



$(".telegram").click(function() {
    var color = "rgba(189, 217, 255, 0.8)";
    var text = "УКАЖИТЕ НОМЕР СВОЕГО TELEGRAM *"
    $(".popup-form__telephone-field-wrap").css("background-color", color);
    $(".popup-form__telephone-field-header").html(text);  
    
    $(".popup-form__hidden-field").val("telegram");
});

$(".whatsapp").click(function() {
    var color = "rgba(191, 242, 210, 0.74)";
    var text = "УКАЖИТЕ НОМЕР СВОЕГО WHATSAPP *"
    $(".popup-form__telephone-field-wrap").css("background-color", color);
    $(".popup-form__telephone-field-header").html(text);

    $(".popup-form__hidden-field").val("whatsapp");
});

$(".viber").click(function() {
    var color = "rgba(220, 188, 235, 0.75)";
    var text = "УКАЖИТЕ НОМЕР СВОЕГО VIBER *"
    $(".popup-form__telephone-field-wrap").css("background-color", color);
    $(".popup-form__telephone-field-header").html(text);  
    
    $(".popup-form__hidden-field").val("viber");
});

$(".mobile").click(function() {
    var color = "rgba(189, 217, 255, 0.8)";
    var text = "УКАЖИТЕ НОМЕР СВОЕГО ТЕЛЕФОНА *"
    $(".popup-form__telephone-field-wrap").css("background-color", color);
    $(".popup-form__telephone-field-header").html(text);  
    
    $(".popup-form__hidden-field").val("mobile");
});

