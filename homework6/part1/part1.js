let firstDiv = document.getElementById('myDiv');
let secondDiv = document.getElementById("content");
let button = document.getElementById('myDiv').lastElementChild;


function greeting(first, last) {
    secondDiv.innerHTML = `<h3>Hello ${first} ${last}</h3>`;
}



button.addEventListener("click", function () {
    let fName = firstDiv.getElementsByTagName('input')[0].value;
    let lName = firstDiv.getElementsByTagName('input')[1].value;

    secondDiv.value = ''
    greeting(fName, lName)
});

secondDiv.addEventListener("mouseover", function(event){
        event.target.remove();
});

