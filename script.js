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

function fakeBin(x){
  let str = '';

  for(let i = 0; i < x.length; i++) {
  if(x[i] >= 0 && x[i] < 5){
   str += 0;
  }

  if(x[i] >= 5) {
    str += '1';
  }
}
  return str;

}

console.log(fakeBin('3219893195'));