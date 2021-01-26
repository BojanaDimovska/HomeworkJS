let content = document.getElementById('content');
let button = document.getElementById('btn');


button.addEventListener("click", function (){
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let age = document.getElementById('years').value;

    let arr = [];

    let students = {
        name: fName,
        last: lName,
        years: age
    }

    arr.push(students);
    // console.log(arr);

    content.innerHTML += `<ul>  
            <li>${fName} ${lName} ${age} years</li>
    </ul>`

    document.getElementById('fName').value = ''
    document.getElementById('lName').value = ''
    document.getElementById('years').value = ''
    

});
