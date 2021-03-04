'use strict;'
/* 1
Напишите функцию pow(x,n), которая возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные 
значения n, т.е. целые от 1 и выше.


function pow(x, n) {
  if(n>1 && Number.isInteger(n)==true){
        return x**n;
    }
        return 'Введите натуральное n больше 1';
}

let x = +prompt('Введите x:', '');
let n = +prompt('Введите n:', '');
  alert( pow(x,n ));
*/


/* 2
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:

 function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
)
*/

/* 3
Напишите функцию isEmpty(obj), которая возвращает true,
если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

let schedule = {
  name: 'john',
};
function isEmpty(obj){
  for (let key in obj) {
    return false
  }
  return true
}
alert(isEmpty(schedule));
*/


/* 4
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
  for (let key in salaries){
    sum += salaries[key];
  }
  
alert(sum);