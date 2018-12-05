// var total=0;
// function fn(num1,num2){
// console.log(total);//->undefined 外面修改不了私有的
// var total=num1 +num2;
// console.log(total);//->300
// }
// fn(100,200);
// console.log(total);//->0 私有的也修改不了外面的


//例题1
// console.log(num);//->undefined
// var num=12;

//例题2
// console.log(num2);//->Uncaught ReferenceError:num2 is not defined 
// num2=12;//不能预解释

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";

console.log(a == c); // true
console.log(b == c); // true
console.log(a == b); // false