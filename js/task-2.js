/*
    2. Обменять значения двух переменных, используя третью (буферную) переменную.
*/

var x = +prompt("Введите значение X", 0);
var y = +prompt("Введите значение Y", 0);
var z;

document.write ('Поточные данные: Х = ' + x + '; Y + ' + y + '<br>');   

z = x;
x = y;
y = z;

document.write ('Конечный результат: Х = ' + x + '; Y + ' + y + '<br>');   