var i=1
do{
    if (i%3==0){
        console.log(i,"nav")
    }else if (i%7==0){
        console.log(i,"gurukul")
    }else if(i%3==0 && i%7==0){
        console.log(i,"navgurukul")
    }
    i++
}
while (i<=20)