let kg = prompt("Enter Kilgrams");
function weightConverter(kilograms) {
    document.getElementById("chickens").innerHTML=kilograms*0.5;
    return kilograms*0.5;
  }
weightConverter(kg);
