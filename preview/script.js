// function showFirstMessage(text){
//     alert(text);
// }

// showFirstMessage("Hello");

function calc(a,b){
    return (a + b);
}

console.log(calc(5, 5));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));