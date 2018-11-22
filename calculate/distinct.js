var arr = [3,5,2,6,2,3,5,8,6]

function distinct(arr) {
    return arr.filter(function (elem,index,arr){
        return arr.indexOf(elem,index+1) === -1;
    });
}

// console.log(distinct(arr));

function fn(a){
    console.log(a);
    var a=2;
    function a(){}
    console.log(a);
}
// fn(1);

for (var i = 0;i<=3;i++){
    setTimeout(function (){
        console.log(i);
    },0);
    console.log('ok')
}