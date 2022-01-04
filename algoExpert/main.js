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
console.log(lengthOfLongestSubstring("dvdf"))

// 1 1 3  5   7   22
// 1 2 5 10  17   