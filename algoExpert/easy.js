//https://www.algoexpert.io/questions/Two%20Number%20Sum
function twoNumberSum(array, targetSum) {
    var freq = {};
    var ans = [];
    array.forEach(ele=>{
        if(freq[targetSum-ele]&& ans.length==0)
            ans.push(ele, targetSum-ele)
        freq[ele]=1
    })
    return ans
}
//https://www.algoexpert.io/questions/Validate%20Subsequence
function isValidSubsequence(array, sequence) {
    var curr = 0, trueCount=0;
    sequence.forEach(ele=>{
        for(let i=curr;i<array.length;i++){
            if(array[i] == ele){
                curr = i+1;
                trueCount++
                break;
            }
        }
    })
    return (trueCount==sequence.length)
}


//https://www.algoexpert.io/questions/Sorted%20Squared%20Array
function sortedSquaredArray(array) {
    var out=[]
    array.forEach(element => {
        out.push(element*element)
    });
    out = out.sort((a,b)=>{
        return a-b
    })
    return out ;
}


//https://www.algoexpert.io/questions/Non-Constructible%20Change
function nonConstructibleChange(coins) {
    coins.sort((a,b)=>{return a-b})
    var coinSum = 0
    coins.forEach(element => {
        if(coinSum+1 < element)return coinSum+1
        coinSum+=element
    });
    return coinSum+1;
}