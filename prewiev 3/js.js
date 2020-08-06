// let btn = document.querySelectorAll('button');
//     wrap = document.querySelector('.wrapper');
//     link = document.querySelector('a');

// // btn[0].onclick = function() {
// //     alert('Вы нажали первую кнопку!');
// // };

// btn[0].addEventListener('click', function(event) {
//     // let target = event.target;
//     // target.style.display = 'none';
    
//     console.log('Произошло событие: ' + event.type + ' на элементе'
//      + event.target);
// });

// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' + event.type + ' на элементе'
//       + event.target);
// });

// link.addEventListener('click', function(){
//     event.preventDefault();
//     console.log('Произошло событие: ' + event.type + ' на элементе'
//       + event.target);
// });

// btn.forEach(function(item){
//     item.addEventListener('mouseleave', function(){
//         console.log('Вышли!');
//     });
// });

// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали на первую кнопку!');
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели курсор на первую кнопку');
// })

//touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', function(){
//     let box = document.querySelector('.box');

//     // box.addEventListener('touchstart', function(e){
//     //     e.preventDefault();
//     //     console.log('Red box: touchstart');
//     //     console.log(e.target);
//     //     console.log(e.touches[0].target);
//     //     console.log(e.changedTouches);
//     //     console.log(e.targetTouches);
//     // });

//     box.addEventListener('touchmove', function(e){
//         e.preventDefault();
//         console.log('Red box: ' + e.touches[0].pageX);
//     });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log('Red box: touchend');
    // });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя');
    // let reg = /n/g;

    // // console.log(ans.search(reg));
    // console.log(reg.test(ans));

    // i  - это флаг регистра, выведет элемент в независимости от регистра
    // g - флаг глобальности.
    // m - флаг многострочности

   // \d - класс находит цифру
   // \w - найти все буквы
   // \s - найти пробелы

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-56'.replace(/-/g, ':'));

    // let ans = prompt('Введите число');

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    // let str = 'My name is R2D2';

    // console.log(str.match(/\w\d\w\d/i));

// });

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello(){
//     console.log('Hello World!');
// }

// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 2000);
// })

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame () {
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event){
//     if (event.target && event.target.tagName == 'BUTTON'){
//         console.log('Hello');
//     }
// });
// btnBlock.addEventListener('click', function(event){
//     if (event.target && event.target.classList.contains('second')){
//         console.log('Hello');
//     }
// });

btnBlock.addEventListener('click', function(event){
    if (event.target && event.target.matches('button.second')){
        console.log('Hello');
    }
});