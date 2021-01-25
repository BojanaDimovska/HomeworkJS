let arr = [3, 5, 6, 8, 11];



function minAndMax(niza) {
    let smallest = Math.min(...niza)
    let largest = Math.max(...niza)

    
    console.log(`The smallest number is: ${smallest}`)
    console.log(`The largest number is: ${largest}`)
    console.log(`Sum is: ${smallest + largest}`)
}

minAndMax(arr);


