for (let i = 10000; i >= 1; i--) {
    console.log(i)
}                       //10000 ~ 1 거꾸로 

for (let i = 1; i < 10000; i++){
   if (i % 2 === 1)
    console.log(i)    // 1 ~ 10000 홀수  
}

for (let i = 1; i<= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log(j * i)
    }                           // 구구단
}
