// var a="3";
// var b=3
// console.log(a/b)

// var a=null;
// console.log(typeof(a))


// var a=3;
// var b=4;
// console.log(a===b)

// var a=4!==3
// console.log(a)

// var 

// var c=(condition)?a:b


// var obj=[1,2,3,4,5]
// for(var key in  obj){
//     console.log(key)

// let a=3
// let a=5
// console.log(a);





// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("Enter your number----")
// let i=2;
// var count=0
// while (num>i.){
//     if (num%i==0){
//         count=count+1
//     }i++
// }if (count===0){
//     console.log("prime number")
// }else{
//     console.log("not pr5ime number")
// }


var array=[2,3,5,7,8,9,12,15,90,77,45]
// var i=2;
// var count=0
for (var i of array){
    var count=0
    for (let j=1;j<=i;j++){
        if (i%j==0){
            count=count+1
        }
    }if (count==2){
        console.log(i,"prime")
    }else{
        console.log(i,"not prime")
    }

}








