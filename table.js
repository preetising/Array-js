let a=require("readline-sync")
let num=parseInt(a.questionInt("Enter your number----"))
for (let i=1;i<=10;i++){
   multi=num*i
   console.log(num+"x"+i+"="+multi)
}