var user = 'Aidan';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Half-Life: Alyx reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 60,
    studentDiscount = .5,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
