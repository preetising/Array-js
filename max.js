var readlinesync=require("readline-sync");
var a=readlinesync.question("Enter your number----")
var b=readlinesync.question("Enter your number----")
var c=readlinesync.question("Enter your number----")
if (a>b && a>c){
    console.log(a,"a is greater then b")
}else if (b>a && b>c){
    console.log(b,"is greater then c")
}else if (c>a && c>b){
    console.log(c,"c is greater then a")
}
