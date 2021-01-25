let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

let fullName = function (first, last) {
    let name = [];
    let number = 1;


    for (let i = 0; i < first.length; i++) {

        name.push(`${number++}. ${first[i]} ${last[i]}`);

    }
    return name;
}

console.log(fullName(first, last));