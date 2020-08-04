// function showFirstMessage(text){
//     alert(text);
// }

// showFirstMessage("Hello");

// function calc(a,b){
//     return (a + b);
// }

// console.log(calc(5, 5));

// function retVar(){
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
//-------------------------------------------------------
//Callback function

// function first() {
//     setTimeout( function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// // learnJS("JavaScript", function(){
// //     console.log("Я прошел 3-й урок!");
// // })

// function done() {
//     console.log("Я прошел 3-й урок!");
// }

// learnJS("JavaScript", done);

// //---------------------------------------------------------
// // Objects

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "text"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);

// //-------------------------------------------
// //Arrays

// //let arr = [1, 2, 3, 4, 5];

// /*
// arr[99] = 99;  // Так делать неправильно.
// console.log(arr.length); // length выводит колличество элементов в массиве +1 элемент.
// */

// /*
// arr.pop(); // Удаляет последний элемент массива.
// arr.push("5"); // Добавляет элемент в конец массива.
// arr.shift(); // Удаляет первый элемент массива.
// arr.unshift("1"); // Добавляет элемент в начало массива.
// */

// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // let arr = ["first", 2, 3, "four", 5];

// // arr.forEach(function(item , i , mass){
// //     console.log(i + ': ' + item + " (массив: " + mass + ')');
// // });

// // console.log(arr);

// // let mass = [1,3,4,6,7];

// // for(let key in mass) {
// //     console.log(key);
// // }

// // let ans = prompt("", ""),
// //     arr = [];

// // arr = ans.split(',');
// // console.log(arr);

// // let arr = ["aswe", 'zzz', 'popr'],
// //     i = arr.join(', ');   // этот метод склеивает элементы в одну строку.

// // console.log(i);

// // let arr = [1, 15, 4],
// //     i = arr.sort(compareNum);   // Сортирует строки по алфавиту и всё сортирует как строки

// // function compareNum(a,b){  // Для сортировки чисел необходимо применять callback функцию.
// //     return a-b;
// // }
// //  console.log(arr);

//  //---------------------------------------------------------------------------------

//  //Object Oriented Programming

// //  let soldier = {
// //      health: 400,
// //      armor: 100
// //  };

// //  let john = {
// //      health: 100
// //  };

// //  john.__proto__ = soldier;

// //  console.log(john);
// //  console.log(john.armor);

// // разбор пройденного.
// // const obj = {
// //     name: 'Alex'
// // }
// //             0   1   2   3
// // const arr = [1, 3, 5, 6];

// // Превращение в строку - to String

// //1 variant
// console.log(typeof(String(4)));
// //2 variant
// console.log("ww" + 5);
// console.log('https://vk.com/catalog/' + 5);

// // - to Number

// //1
// console.log(typeof(Number('4')));

// //2
// console.log(typeof(5+ +'5'));

// //3
// console.log(typeof(parseInt('15px', 10)));

// let ans = +prompt("Hello?", '');

// // 0, '', null, undefined, NaN   Означают ничего или false.

// let switcher = null;

// if(switcher) {
//     console.log("Working..");
// }

// switcher = 1;

// if(switcher) {
//     console.log("Working..");
// }

// // - to Boolean
// //1
// console.log(typeof(Boolean('4')));

// //2
// console.log(typeof(!!'4'));


// console.log([ ] + false - null + true);

// let y = 1; let x = y = 2; alert(x);

// console.log([] + 1 + 2);

// alert( "1"[0] );

// console.log(2 && 1 && null && 0 && undefined);

// alert( null || 2 && 3 || 4 );

// alert( +"Infinity" );

// console.log(0 || "" || 2 || undefined || true || falsе);

