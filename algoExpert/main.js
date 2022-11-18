
function indexEqualsValue(array) {
    for(let i = 0; i<array.length; i++){
        if(array[i] == i)
            return i;
    }
    return -1;
}

console.log(indexEqualsValue([-5, -3, 0, 3, 4, 5, 9]))

//   console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
// 1 1 3  5   7   22
// 1 2 5 10  17   






