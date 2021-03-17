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
*/

let schedule = {
  name: 'john',
};
function isEmpty(obj){
  for (let key in obj) {
    return false
  }
  return true
}
console.log(isEmpty(schedule));



/* 4
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
  for (let key in salaries){
    sum += salaries[key];
  }

console.log(sum);
*/

/* 5
Создайте функцию multiplyNumeric(obj), которая умножает все числовые
свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать.
Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
  for (let key in obj) {
  if (typeof obj[key] == 'number') {
    obj[key] = obj[key] * 2;
    }
  }
}
multiplyNumeric(menu);

console.log(menu);

/* 6
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  read: function() {
    //this.a = +prompt('num 1');
    //this.b = +prompt('num 2');
  },
  sum: function() {
    return this.a + this.b
  },
  mul: function() {
    return this.a * this.b
  }
};

console.log(calculator.read())
console.log(calculator.sum())
console.log(calculator.mul())

/* 7
 Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

console.log(ladder.up().up().down().showStep());




let newWord = '';
function changeWord(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '5') {
      newWord += 's';
    } else {
      newWord += word[i]
    }
  }
  return newWord;
}

console.log(changeWord('5o5'));



/*
Создайте функцию readNumber, которая будет запрашивать ввод 
числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку 
или нажав «Отмена». В этом случае функция должна вернуть null.



function readNumber() {
  let num;
  do {
    //num = prompt('введите число' , 0)
  } while (typeof num === 'number')

  if(num === null || num === '') return null;
  return +num;
}

console.log(readNumber());
*/

/*
Встроенный метод Math.random() возвращает случайное число от 0 (включительно)
 до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует 
случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

function random(min, max) {
  return (Math.random() * (max-min) + min) 
}
console.log(random(1, 5));

/*
Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

*/

function checkSpam(str) {
  let newStr = str.toLowerCase();
  return newStr.includes('viagra') || newStr.includes('xxxxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

/*
Создайте функцию truncate(str, maxlength),
 которая проверяет длину строки str и, если она 
 превосходит maxlength, заменяет конец str на "…", 
 так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение 
не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str , maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  } else {
     return str;
  }
}
console.log(truncate("Всем привет!", 20));
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));


/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты,
 а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из 
такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));


/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика».
Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1)/2)] = 'Классика';
styles.shift();
styles.unshift('Рэп' , 'Регги');

console.log(styles);

/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт 
не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/


function sumInput() {
  let numbers = [];
  while (true) {
    let num = prompt('Введите число', 0);
    if (num === '' || num === null || !isFinite(num)) break;
      numbers.push(+num);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());


