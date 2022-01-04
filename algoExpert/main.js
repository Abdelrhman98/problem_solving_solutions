function nonConstructibleChange(coins) {
    coins.sort((a,b)=>{return a-b})
    var coinSum = 0
    coins.forEach(element => {
        if(coinSum+1 < element)return coinSum+1
        coinSum+=element
    });
    return coinSum+1;
}

console.log(nonConstructibleChange([5,7,1,1,2,3,22]))

// 1 1 3  5   7   22
// 1 2 5 10  17   