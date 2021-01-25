let number  = parseInt(prompt("Enter a number: "));


function num(a){
    let flag =0;
    if (a > 0){
        console.log("The number is positive")
    }
    else if(a == 0){
        console.log
    }
    else{
        console.log("The number is negative")
    }

    while (parseInt(a / 10 >= 1)){
        a/=10;
        flag++;
    }

}

num();