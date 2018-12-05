var array = [1, 2, 3, [4, 5, [6, 7, [9]]]];
// 将上述转换成下面的形式
// array = [1,2,3,4,5,6,7,9]
console.log(array)
console.log(array.join(","))
array = array.join(",").split(",")
console.log(array)