let fName = document.getElementById('name');
let lName = document.getElementById('surname');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let button = document.getElementById('btn');
let newContent = document.querySelector('#newContent')


function takeValues (first, last, email, pass) {
    newContent.innerText = `${first} ${last}, ${email}, ${pass}`
}



button.addEventListener ("click", function(){

    let fNameV = fName.value
    let lNameV = lName.value
    let emailV = email.value
    let passV = pass.value

    takeValues(fNameV, lNameV, emailV, passV)
});

