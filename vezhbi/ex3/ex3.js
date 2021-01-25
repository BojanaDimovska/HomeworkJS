function splitNumbers(numbers) {
    let odd = [];
    let even = [];

    for (let i of numbers){
        if (i % 2 === 0) {
            even.push(i);
        } else {
            odd.push(i)
        }
    }
    const returnArray = {
        odd,
        even,
      };
    
      return returnArray;
    }
// }

console.log(splitNumbers([1,2,3,4,5,6]));
