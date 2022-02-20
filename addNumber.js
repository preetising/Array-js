var readlinesync=require("readline-sync");
var a=readlinesync.questionInt("Enter your number---")
sum=0
var i=1
while (i<=a){
    var b=readlinesync.questionInt("Enter your number---")
    sum=sum+b
    console.log(sum)
    i++
}


// output

// Enter your number---10
// Enter your number---10
// 10
// Enter your number---16
// 26
// Enter your number---9
// 35
// Enter your number---10
// 45
// Enter your number---56
// 101
// Enter your number---78
// 179
// Enter your number---98
// 277
// Enter your number---43
// 320
// Enter your number---21
// 341
// Enter your number---76
// 417


