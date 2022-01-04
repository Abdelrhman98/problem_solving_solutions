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