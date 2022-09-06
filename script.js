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

function bmi(weight, height) {
const y = weight / (height * height);
if(y <= 18.5) {
  return "Underweight";
} else if (y <= 25) {
  return "Normal";
} else if (y <= 30) {
  return "Overweight";
} else {
  return "Obese";
}
}

console.log(bmi(100, 1.70));


function bmi(weight, height) {
  const bmiTotal = weight / (height * height);
  return bmiTotal <= 18.5? "Underweight" : bmiTotal <= 25? "Normal" : bmiTotal <= 30? "Overweight":"Obese";
}
  console.log(bmi(100, 1.70));