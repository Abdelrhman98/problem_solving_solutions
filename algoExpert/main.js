//https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/


var lengthOfLongestSubstring = function(s) {
    var mx = 0, tempArr = s.split(''), subStr=''
    tempArr.forEach(char=>{
        if(subStr.includes(char)){
            subStr=char

        }else{
            subStr+=char
            if(mx<subStr.length)
                mx=subStr.length
            
        }
    })
    return mx;
}
//console.log(searchInsert([1,3,5,6],2))


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

console.log(firstDuplicateValue([1, 1, 2, 3, 3, 2, 2]))
// 1 1 3  5   7   22
// 1 2 5 10  17   