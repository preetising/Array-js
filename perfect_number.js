var readlinessync=require("readline-sync")
var num=readlinessync.question("Enter your number:-")
var sum=0
var i=1
while (i<=num/2){
    if (num%i==0){
        sum=sum+i
    }i++
}
if (num==sum){
    console.log("perfect number");
}else{
    console.log("not perfect number");
}

