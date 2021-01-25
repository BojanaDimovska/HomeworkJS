

function allTruthyVal(input){
    let array = [];
    for (let i of input) {
        if(!!i){
            array.push(i);
        }
    }
    return array
}

console.log(allTruthyVal([1,5, null, 5, undefined, NaN,8,4]));