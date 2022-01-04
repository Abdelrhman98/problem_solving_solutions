
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