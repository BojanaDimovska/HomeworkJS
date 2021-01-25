function sumOfArrays(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let add = numbers[i];
    sum += add;
  }
  return sum;
}

console.log(sumOfArrays([7, 4, 1, 8, 2]));

//BONUS
function validateNumber(input){
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if(input[i] === typeof(String)){
            console.log("Error!!!")
        }
        else {
            let add = input[i];
            sum += add;
        }
    }
    return sum;

}

console.log(validateNumber([1,3,6,'Bojana',9]));