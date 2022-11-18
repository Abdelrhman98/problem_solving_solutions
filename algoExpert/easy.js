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


//https://www.algoexpert.io/questions/Bubble%20Sort
function bubbleSort(array) {
    for(let i=0; i<array.length - 1 ; i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                let temp  =  array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
//https://www.algoexpert.io/questions/Tandem%20Bicycle
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b)=>{return a-b})
    blueShirtSpeeds.sort((a,b)=>{return (fastest)?b-a:a-b})
    var total = 0;

    // console.log(redShirtSpeeds, blueShirtSpeeds)
    
    redShirtSpeeds.forEach((ele,i)=>{
        total+=Math.max(ele,blueShirtSpeeds[i])
    })

    return total;
}

//https://www.algoexpert.io/questions/Tournament%20Winner
function tournamentWinner(competitions, results) {
    var teams = {},
    winnerTeam = "",
    maxPoints = 0
    competitions.forEach((match, i)=>{
        if(!teams[match[(results[i]+1)%2]])
            teams[match[(results[i]+1)%2]]=0
        
        teams[match[(results[i]+1)%2]]+=3
        if(teams[match[(results[i]+1)%2]] > maxPoints){
            maxPoints = teams[match[(results[i]+1)%2]]
            winnerTeam = match[(results[i]+1)%2]
        }
    })
    // console.log(winnerTeam)
    return winnerTeam;
}



//https://www.algoexpert.io/questions/Move%20Element%20To%20End
function moveElementToEnd(array, toMove) {
    let toMoveCnt = 0,
    arrCopy = [...array]
    array = array.filter(ele=> ele!=toMove)
    array.push(...Array(arrCopy.length - array.length).fill(toMove))
    return array
}

//https://www.algoexpert.io/questions/Move%20Element%20To%20End
function moveElementToEnd(array, toMove) {
    let toMoveCnt = 0,
    arrCopy = [...array]
    array = array.filter(ele=> ele!=toMove)
    array.push(...Array(arrCopy.length - array.length).fill(toMove))
    return array
}



//https://www.algoexpert.io/questions/product-sum
function productSum(array, lvl=1) {
	let sum = 0;
  for(let i of array)
    sum+=(typeof i =='object')?productSum(i, lvl+1):i;
  return sum*lvl;
}

///
let x = [2, 5, -3, -4, 6, 7, 2]
function nextGreaterElement(array) {
  let res = [];
  array.forEach((ele, idx)=>{
    let flag = false;
    for(let i = idx+1;i<array.length;i++){
  		if(array[i]>ele){
        res.push(array[i])
        flag = true;
        break;
      }
    }
    if(!flag){
       for(let i = 0 ;i<idx+1 ;i++){
  		if(array[i]>ele){
        res.push(array[i])
        flag = true;
        break;
      }
    	}
    }
    if(!flag){
    	res.push(-1)  
    }
  })
  return res;
}