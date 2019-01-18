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

// var a = [1, 2, 3];
// var b = [1, 2, 3];
// var c = "1,2,3";

// console.log(a == c); // true
// console.log(b == c); // true
// console.log(a == b); // false

//=>变量提升：var a;var b;var c;test=AAAFFF111；
// var a = 10,
//     b = 11,
//     c = 12;

// function test(a) {
//     //=>私有作用域：a=10 var b；
//     a = 1; //=>私有变量a=1
//     var b = 2; //=>私有变量b=2
//     c = 3; //=>全局变量c=3
//     console.log(b)
// }
// test(10);
// console.log(a); //10
// console.log(b); //11
// console.log(c); //3

// var foo = {
//     name: 'fooname',
//     getName: function (){
//         return this.name  
//     }
// }
// console.log(foo.getName());  // this => foo

// 引用类型复制变量
var a = { age: 27 };
var b = a;
b.age = 29;

console.log(a.age == b.age); // 29