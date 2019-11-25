//ES5
var num = 100;
var sumNumbers = function (a,b) {
    return a+b;
};

sumNumbers(10, 20);

//ES6
const num = 100;
let sumNumbers = (a,b) => {
    return a+b;
};

sumNumbers(10, 20);

//할당한 값을 변경할 수 있는 let
let a = 10;
a = 20;

//값의 갱신을 허용하지 않는 const
const a = 10;
a = 20;

var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); //5

let i = 10;
for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); //10
