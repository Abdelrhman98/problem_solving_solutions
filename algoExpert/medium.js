//https://www.algoexpert.io/questions/First%20Duplicate%20Value
function firstDuplicateValue(array) {
    var freq={}
    for(let x of array){
        //console.log(x)
        if(freq[x]>=1){
            return x
        }else{
            freq[x]=1
        }
    }
    return -1;
}


//https://www.algoexpert.io/questions/Nth%20Fibonacci
function getNthFib(n) {
    var fib = 0, fibo=[0,1];
    
    for(let i=2;i<n;i++){
        fibo.push(fibo[i-2]+fibo[i-1])
    }
    return fibo[n-1]
}