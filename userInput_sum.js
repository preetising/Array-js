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