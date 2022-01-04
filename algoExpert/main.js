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


var searchInsert = function(nums, target) {
    let idx=0;
    for( const x in nums){
        if(nums[x]>target){
            idx=(idx>0)?idx--:idx;
            break
        }else if(nums[x]==target){
            break;
        }
       // console.log(nums[x])
        idx++
    }
    return idx;
}
console.log(searchInsert([1,3,5,6],2))

// 1 1 3  5   7   22
// 1 2 5 10  17   