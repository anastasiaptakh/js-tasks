'use strict;'
/*
Напишите функцию pow(x,n), которая возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные 
значения n, т.е. целые от 1 и выше.
*/

function pow(x, n) {
  if(n>1 && Number.isInteger(n)==true){
        return x**n;
    }
        return 'Введите натуральное n больше 1';
}

let x = +prompt('Введите x:', '');
let n = +prompt('Введите n:', '');
  alert( pow(x,n ));


/*
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
*/

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
)
