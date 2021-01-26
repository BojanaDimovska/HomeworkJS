let listDiv = document.getElementById("list");
let numbers = [3, 7, 8, 7, 1];


function printNumbers(input, element) {
    element.innerHTML = '';
    element.innerHTML += "<h1>All the numbers plus their sum</h1>";
    let ulElement = document.createElement("ul")
    let sum = document.createElement('h3');
    for (let i in input) {
        let item = document.createElement("li");
        item.innerText = `${input[i]}`;
        sum.innerText = sumArray(input)
        ulElement.appendChild(item);
    }
    element.appendChild(ulElement);
    element.appendChild(sum)
}

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return `(${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]} + ${arr[4]} = ${total})`
}





printNumbers(numbers, listDiv);
