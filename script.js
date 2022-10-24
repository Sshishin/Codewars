// console.log('Hello');

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// Создать функцию которая будет удалять все восклицательные знаки из строки

// function removeExclamationMarks(s) {
//     return '';
//   }

// ************ Начал решение *******************

// function removeExclamationMarks(s) {
//    let y = '';
//     for(let i of s) {
//         if (i == '!') {
//             continue;
//         } else {
//              y = y + i
//         }
//     }
//     console.log(y)
//     return y;
//   }

// removeExclamationMarks('H!ello! World!')

// ************ РЕШЕНО *******************


// Решения которые мне понравились

// function removeExclamationMarks(s) {
//     return s.split('!').join('');
//   }

// function greet (str) {
//     str = 'hello world!';
//     return str;
//     }

// function makeUpperCase(str) {
//     // Coreturde here
//     return str.toUpperCase()
//   }
//   console.log(makeUpperCase('Джонни'))

  


//   function basicOp(operation, value1, value2)
// {
//   let x = eval(value1 + operation + value2); 
  
// return x;
// }
// console.log(typeof x)
// console.log(basicOp('*', 5, 2))


// var countSheep = function (num){
//   let str = '';
//   let sumStr = '';
//   let sheep = ' sheep...';
  

//   for(let i = 1; i <= num; i++) {
//     str = i + sheep;
//     sumStr += str;
//   }
  
//   return sumStr;
  
// };


// console.log(countSheep(3));

// // Решения которые мне понравились

// var countSheep = function (num){
//   let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;
// };

// Задача с переводом зачений к 1 или 0

// function fakeBin(x){
//   let str = '';

//   for(let i = 0; i < x.length; i++) {
//   if(x[i] >= 0 && x[i] < 5){
//    str += 0;
//   }

//   if(x[i] >= 5) {
//     str += '1';
//   }
// }
//   return str;

// }

// console.log(fakeBin('3219893195'));


// Counting sheep
// Самостоятельное решение

//  const arr = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true];



// function countSheeps(arrayOfSheep) {
//   let total = 0;
//   arrayOfSheep.forEach((count) => {
//     if(count) {
//       total++;
//     }
//   });
//   return total;
// }

// console.log(countSheeps(arr));

// //  multiplying two numbers
// // Самостоятельное решение

// const multiply = (a, b) => a * b;

// console.log(multiply(3, 4));


// Перевод в бинарное
// Самостоятельное решение

// function addBinary(a,b) {
//  return Number(a + b).toString(2);
// }

// console.log(addBinary(2,3));


//Мое решение

// function getGrade (s1, s2, s3) {
//   const average = (s1 + s2 + s3) / 3;
//   if(average <= 100 && average >= 90) {
//     return 'A';
//   } else if (average <= 90 && average >= 80) {
//     return 'B';
//   } else if (average <= 80 && average >= 70) {
//     return 'C';
//   } else if (average <= 70 && average >= 60) {
//     return 'D';
//   } else if (average <= 60) {
//     return 'F';
//   }
// }
// console.log(getGrade (100, 39, 89));


// // Решение которое мне порнравилось

// function getGrade (s1, s2, s3) {
//   var s = (s1 + s2 + s3) / 3;
//   return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
// }

// // Переворот строки
// // Самостоятельное решение

// function reverseWords(str) {
//   const splitString = str.split(' ');
//   let sumString = '';

//   for(let i = 0; i <= splitString.length - 1; i++) {
//       sumString += splitString[i].split('').reverse().join('');
//   }
//   return sumString;
// }


// Regex validate PIN code


// function validatePIN (pin) {
//   pin = pin.replace(/\s+/g);
//   const item = pin.split('');
//   let total = '';

//   for(let i = 0; i <= item.length - 1; i++) {
//     if(!isNaN(item[i])) {
//       total += item[i];
//     }
// }
// console.log(total);
//   if (total.length === 4 || total.length == 6) {
//     return true;
//   } else {
//     return false;
//   }
  
// }
// console.log(validatePIN ('1234'));

// Возврат строки в зависимости от того владелец зашел или кто-то другой
//Самостоятельное решение

// function greet (name, owner) {
//   if(name == owner) {
//     return 'Hello boss';
//   } else {
//     return 'Hello guest';
//   }
// }

// greet ('Johnn', 'John');


//Самостоятельное решение

// function areYouPlayingBanjo(name) {
//   let str = name.split('');
//   str.forEach((item) => {
//     if(item == 'R' || item == 'r') {
//       console.log('right');
//       let y = str.join('');
//       console.log(y)
//       return y + 'Yes';
      
//     } else {
//       console.log('lose');
//     }
//   });
//   console.log(str)
//   return name + 'Yes';
// }

// areYouPlayingBanjo('Ruby');

// function areYouPlayingBanjo(name) {
//   let firstWord = name.split('');
//   if(firstWord[0] == 'R' || firstWord[0] == 'r') {
//     name = name + ' plays banjo';
//     return name;
//   } else {
//     name = name + ' does not play banjo';
//     return name;
//   }
// }
// console.log(areYouPlayingBanjo('Rube'));

// // Объем прямоугольного параллелипипеда 

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// Самостоятельные решения 

// function bmi(weight, height) {
// const y = weight / (height * height);
// if(y <= 18.5) {
//   return "Underweight";
// } else if (y <= 25) {
//   return "Normal";
// } else if (y <= 30) {
//   return "Overweight";
// } else {
//   return "Obese";
// }
// }

// console.log(bmi(100, 1.70));


// function bmi(weight, height) {
//   const bmiTotal = weight / (height * height);
//   return bmiTotal <= 18.5? "Underweight" : bmiTotal <= 25? "Normal" : bmiTotal <= 30? "Overweight":"Obese";
// }
//   console.log(bmi(100, 1.70));


// Самостоятельные решения по округлению

  // function litres(time) {
  //   return Math.floor(time * 0.5);
  // }

  // console.log(litres(11.8));


  // const litres = (t, w = 0.5) => Math.floor(t * w);


//   const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"; 

// // Самостоятельное решение
// // Возврат массива где нужно вернуть массив с заполненным промежутком между переменной a и b

//   function between(a, b) {
//     const arr = [];
//     for(let i = a; i <= b; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }


// Самостоятельное решение
// Непростая задача по массивам где нужно вернуть массив  количством положительных числе и суммой отрицательных чисел

//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
//   const arr2 = [0, 0];
//   const arr3 = [-46];

//   function countPositivesSumNegatives(input) {

//   let newNegativeArr = [];
//   const newArr = [];
//   const returnArr = [];
//   let sumNegative = 0;

//   if(input != null || input != undefined) {
//     input.forEach((digit) => {
//       if(digit < 0) {
//         newNegativeArr.push(digit);
//       } 
//       if(digit > 0) {
//         newArr.push(digit);
//       }
//     });
//   }
 
//   newNegativeArr.forEach((item) => {
//     sumNegative += item;
//   });
  
//   const length = newArr.length;
//   const lengthNegative = newNegativeArr.length;

//   if(lengthNegative == 0 && length == 0) {
//     return [];
//   }

//   returnArr.push(length, sumNegative);

//   return returnArr;
// }

// console.log(countPositivesSumNegatives(arr3));


// Самостоятельное решение
// Нужно определить вместятся ли пассажиры в автобус

// function enough(cap, on, wait) {
//   const countPassangers = on + wait;

//   if(countPassangers > cap) {
//     return countPassangers - cap;
//   }
   
//   else if(countPassangers < cap) {
//     return 0;
//   }
  
//   else {
//     return 0;
//   }
// }

// console.log(enough(50, 25, 29));


// Самостоятельное решение
// Нужно определить квартал по переданному месяцу


// const quarterOf = (month) => {
//   if(month <= 3) {
//     return 1;
//   } else if(month <= 6) {
//     return 2;
//   } else if(month <= 9) {
//     return 3;
//   } else if(month <= 12) {
//     return 4;
//   }
// };

// console.log(quarterOf(4));


// Самостоятельное решение
// Нужно вернуть сумму 2-ух наименьших значений массива

// const arr = [19, 5, 42, 2, 77];

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort(function(a,b){ 
//     return a - b;
//   });
//   return numbers[0] + numbers[1];
// }

// sumTwoSmallestNumbers(arr)


// Самостоятельное решение
// Нужно передать человеческий возвраст и вернуть массив с возрастом кошки и собаки

// var humanYearsCatYearsDogYears = function(humanYears) {
//   let catYears = 0;
//   let dogYears = 0;

//   if(humanYears == 1) {
//     catYears = 15;
//     dogYears = 15;
//   } else if(humanYears == 2) {
//     catYears = 24;
//     dogYears = 24;
//   } else if(humanYears == 3) {
//     catYears = 28;
//     dogYears = 29;
//   } else if(humanYears > 3) {
//     catYears = 28;
//     dogYears = 29;

//     for(let i = 1; i <= humanYears - 3; i++) {
//       catYears += 4;
//       dogYears += 5;
//     }
//   }

//  return [humanYears,catYears,dogYears];
// };

// console.log(humanYearsCatYearsDogYears(10));


// Самостоятельное решение
// Нужно сложить все числа массива

// const arr = [1, 5.2, 4, 0, -1];

// function sum (numbers) {
//   "use strict";
//   let summ = 0;
//   numbers.forEach((item) => {
//     summ += item;
//   });
//   return summ;
// }

// console.log(sum (arr));



// // Самостоятельное решение
// // Нужно определить четная или нечетная сумма массива

// const arr = [0, -1, -4];

// function oddOrEven(array) {
//   let sum = 0;

//   array.forEach(item => {
//     sum += item;
//   });

//   return sum % 2 == 0 ? 'even' : 'odd';
// }

// console.log(oddOrEven(arr));


// Самостоятельное решение
// Сортировка числа по убыванию и возврат в числово формате

// let num = 42453;

// function descendingOrder(n){
//   const arrSort = String(n).split('');
//   arrSort.sort((a, b) => b - a);
//   const createStr = arrSort.join('');
//   const result = +createStr;
//   return result;
// }

// console.log(descendingOrder(num));

// Вернуть минимальное и максимальное значение 

// let input = "1 2 3 4 5";

// function highAndLow(numbers){
//   const arr = [];
//   numbers.split(' ').forEach(item => arr.push(+item));
//   return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
// }

// console.log(highAndLow(input))


// Вернуть количество голов из нескольких лиг

// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;

// // Умножить на одно или другое число в зависимости от четной или не четной переменной 

// const simpleMultiplication = number => number % 2 == 0 ? number * 8 : number * 9;

// // Вернуть строку с удаленными крайними символами

// const removeChar = str => str.slice(1, -1);



// Самостоятельное решение (Digits explosion)
// Готово (Запушить на RS) ******************************************

// let str = '123';

// function explode(s) {
// let total = '';
// let arr = [];

// for(let i = 0; i < str.length; i++) {
//   arr.push(str[i]);
// }
//   arr.forEach(item => {
//     for(let i = 1; i <= item; i++) {
//       total += item;
//     }
//   });
//   return total;
// }

// console.log(explode(str));


// НЕ СДЕЛАНО !!!  ********************************

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   if(enteredCode === correctCode && Date.month(currentDate) <= Date.month(expirationDate)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkCoupon("123", "123", "July 9, 2015", "June 9, 2015"));


// Самостоятельное решение (My Language Skills)
// Готово (Запушить на RS) ******************************************

// let obj = {"Java": 10, "Ruby": 80, "Python": 65}

// function myLanguages(results) {
//   let arr = [];
//   for(let key in results) {
//     if(results[key] >= 60) {
//       arr.push(key);
//     }
//   }
//   return arr.sort();
// }

// console.log(myLanguages(obj)); 




// Самостоятельное решение (N-й Фибоначчи)
// Готово (Запушить на RS) ******************************************

// function nthFibo(n) {
//   const arr = [0,1];
//   let count = 0;

// for(let i = 0; i < n; i++) {
//   let y = arr[i] + arr[i + 1];
//   arr.push(y);
// }

// for(let key in arr) {
//   ++count;
//     if(count == n) {
//       return arr[key];
//     }
//   }
// }

// console.log(nthFibo(6));


// const boolToWord = bool => bool ? 'Yes' : 'No';

// Возврат наименьшего значения массива

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
        // const arr2 = arr.sort((a, b) => b - a);
        // return arr2.pop(); 
//   }
// }


// Если одно число четное а другое нечетное то true, иначе false

// const lovefunc = (flower1, flower2) => flower1 % 2 == 0 && flower2 % 2 != 0 || flower2 % 2 == 0 && flower1 % 2 != 0 ? true : false 

// console.log(lovefunc (1,2));

// Похожая на предыдущую задача

// const setAlarm = (employed, vacation) => employed == true && vacation == false ? true : false


// Вернуть самое короткое слова из строки
// НЕ РЕШЕНО

// const message = "Ripple DarkCoin LiteCoin Monero Monero 21inc MadeSafeCoin Dogecoin Ethereum Ripple 21inc Lisk Dogecoin Waves Bitcoin Lisk";
// let arr = [];
// let minCount = 1000;
// let wordFromArr;

// function findShort(s){
// arr = s.split(' ');

// for(let i = 0; i < arr.length; i++) {
//    wordFromArr = arr[i];
//   if(wordFromArr.length < minCount) {
//     minCount = wordFromArr.length;
//   }
// }

// return minCount;
// }

// console.log(findShort(message))

// РЕШЕНО
// Проблема в тестах была из-за области видимости и переменные должны быть в локальной области видимости

// const message = "Let's travel abroad shall we";


// function findShort(s){
// let arr = [];
// const r = s.split(' ');

// for(let i = 0; i < r.length; i++) {
// const word = r[i];
// arr.push(word.length);
// }

// arr.sort((a, b) => a - b);
// return arr[0];
// }

// console.log(findShort(message));


// Array.diff
// НЕ решено

// const arr1 = [1, 2, 2, 3];
// const arr2 = [1, 2];


// function arrayDiff(a, b) {
//   const arr3 = [];
//   let i = 0;
  
//   if(a.length > 0 && b.length > 0) {
//     a.forEach(item1 => {
//       console.log(i);
//       b.forEach(item2 => {
//         if(item1 != item2) {
//           arr3.push(item1);
//           console.log(arr3)
//         }
//       });
//     });
//     return arr3;
//   } else {
//     return a;
//   }
//   }
  
// console.log(arrayDiff(arr1, arr2));


// const arr1 = [1, 2, 2, 3];
// const arr2 = [1, 2];


// function arrayDiff(a, b) {
//   const arr3 = [];
//   let i = 0;
  
//   if(a.length > 0 && b.length > 0) {
//     a.forEach(item1 => {
//       i++;
//       b.forEach(item2 => {
//         if(item1 == item2) {
//           const y = a.slice(i, i + 1);
//           console.log(y)
//           arr3.push(y)
//         }
//       });
//     });
//     return arr3;
//   } else {
//     return 33;
//   }
//   }
  
// console.log(arrayDiff(arr1, arr2));


const arr1 = [1, 2, 2, 3];
const arr2 = [1, 2];

function arrayDiff(a, b) {
const arr3 = [];
  for(let i = 0; i <= arr1.length; i++) {
    for(let k = 0; k < 1; k++) {
      if(arr1[i] != arr2[k]) {
        arr3.push(arr1[i])
        console.log(arr3)
      }
    }
  }

}

console.log(arrayDiff(arr1, arr2));