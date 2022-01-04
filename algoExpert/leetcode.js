
//https://leetcode.com/problems/group-anagrams/submissions/
var groupAnagrams = function(strs) {
    var map ={},
    result  = []
    strs.forEach(ele=>{
        let temp = ele.split("").sort().join("")
        if(map[temp]){
            map[temp].push(ele)
        }else{
            map[temp] =[ele]
        }
    })
    for(const key in map){
        result.push(map[key])
    }
    return result
};


//https://leetcode.com/problems/search-insert-position/submissions/
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