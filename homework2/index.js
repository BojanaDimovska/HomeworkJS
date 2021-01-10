//Zadaca 1

var a = 5;
console.log("a = " +a);
var b = 3;
console.log("b = " +b);
var c = 8;
console.log("c = " +c);
var d = 2;
console.log("d = " +d);
var e = -3;
console.log("e = " +e);

var largest;


if(a >= b && a >= c && a >= d && a >= e) {
    largest = a;
}
else if (b >= a && b >= c && b >= d && b >= e) {
    largest = b;
}
else if (c >= a && c >= b && c >= d && c >= e) {
    largest = c;
}

else if (d >= a && d >= b && d >= c && d >= e) {
    largest = d;
}

else {
    largest = e;
}

alert("The largest number is " + largest);

//Zadaca 2

var myName = "Bojana";
var mySurname = "Dimovska";

console.log ("Hello, I am " + myName +  ` ${mySurname}`);

// Zadaca 3

let year = prompt("Year: ");
 year = parseFloat(year);
    if ((year - 4) % 12 == 0) {
            console.log("Rat");
    }
    else if ((year - 4) % 12 == 1) {
        console.log("Ox");

    }
    else if ((year - 4) % 12 == 2) {
        console.log("Tiger");
    }
    else if ((year - 4) % 12 == 3) {
        console.log("Rabbit");
    }
    else if ((year - 4) % 12 == 4) {
        console.log("Dragon");

    }
    else if ((year - 4) % 12 == 5) {
        console.log("Snake");

    }
    else if ((year - 4) % 12 == 6) {
        console.log("Horse");

    }
    else if ((year - 4) % 12 == 7) {
        console.log("Goat");

    }
    else if ((year - 4) % 12 == 8) {
        console.log("Monkey");

    }
    else if ((year - 4) % 12 == 9) {
        console.log("Rooster");

    }
    else if ((year - 4) % 12 == 10) {
        console.log("Dog");

    }
    else if ((year - 4) % 12 == 11) {
        console.log("Pig");

    }

    else {
        console.log("Error");

    }
       

