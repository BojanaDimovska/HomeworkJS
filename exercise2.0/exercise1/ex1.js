function insertDashes(arr){
    let flag = arr.length;
    let newArr = [];
    for (let i=0; i < flag; i++){
        newArr.push(arr[i]);
        if(arr[i] % 2 == 0 && arr[i+1] % 2 == 0){
            newArr.push('-');
        }
    }
    return newArr.join(',');
}

console.log(insertDashes([0,2,5,4,6,8]));
