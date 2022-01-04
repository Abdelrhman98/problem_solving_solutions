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

//https://leetcode.com/problems/reverse-integer/submissions/
var reverse = function(x) {
    
        let sx = x.toString().split(''),
        neg = (sx[0]=='-'),
        res=0
        for(let i=sx.length-1 ;i>=neg ;i-- ){
            res*=10
            res+=parseInt(sx[i])
        }
        res*=(neg)?-1:1
        return (res < Math.pow(2,31) && res>= Math.pow(-2,31))?res:0
    
}


console.log(reverse(1534236469))
// 1 1 3  5   7   22
// 1 2 5 10  17   