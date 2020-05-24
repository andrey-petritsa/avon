
var random_numbers = [17, 12, 43, 50, 23, 54, 32]
var current_date = new Date();
var registred_users = random_numbers[current_date.getDay()];
var message = "Регистраций за сегодня: " + (registred_users);
$('.form__today-registrations').html(message);





