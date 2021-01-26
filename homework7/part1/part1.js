let animal = {
    name: prompt("Enter the animal's name: "),
    kind: prompt("Enter the animal's kind: "),
    speak: function(_animal){
        _animal = this.kind + " " + this.name;
        console.log(`${_animal} says: Hey bro!`)
    }
}

animal.speak();