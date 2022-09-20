require('./user');

var vasya = new User('Вася');
var petya = new User('Петя');

vasya.hello(vasya);
vasya.hello(petya);
