/*
    5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.
*/

var age = prompt("Введите Ваше возвраст", 0);

var corect = confirm ('Ваш возраст' + age + ' ?');

alert (corect);

document.write (corect);




