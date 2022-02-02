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

function getNthFib(n) {
    if([0,1,2].includes(n))
          return n
      return getNthFib(n-1) +getNthFib(n-2)
  }

//https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers
function findThreeLargestNumbers(array) {
    
    var mx = [-Infinity,-Infinity,-Infinity]
    
    for(let i = 0;i<array.length;i++){
        if(array[i] >= mx[2]){
            mx[0] = mx[1]
            mx[1] = mx[2]
            mx[2] = array[i]
        }
        else if(array[i] >= mx[1]){
            mx[0] = mx[1]
            mx[1] = array[i]
        }else if(array[i] >= mx[0]){
            mx[0] = array[i]
        }
    }
    return mx;
}

//https://www.algoexpert.io/questions/Three%20Number%20Sum
function threeNumberSum(array, targetSum) {
    var freq={}, res=[]
    var visited = {}
    array.forEach(ele=>{freq[ele]=true})
    for(let i = 0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(i!=j)
            {
                let third = targetSum-(array[i]+array[j])
                var arr = [array[i], array[j], third]
                var srtd = arr.sort((a,b)=>{return a-b}),
                str = `${srtd}`
                if(visited[str] == undefined){
                    if( freq[third]  && third!= array[i] && third!=array[j]){
                        visited[str] = true
                        res.push(srtd)
                    }
                }
            }
            
        }
    }

    res.sort((a,b)=>{
        if(a[0] == b[0])
            return a[1]-b[1]
        return a[0] - b[0]
        
    })
    return res
}

function runLengthEncoding(string) {
    var allChars = string.split(''),
    genString="",
    activeChar="",
    cnt=0,
    last=allChars.length,
    idx=1
    
    allChars.forEach(ele=>{
        if(ele == activeChar)
            cnt+=1
        
        if(ele!=activeChar || idx == last){
            genString+= ("9"+activeChar).repeat( (cnt/9).toFixed(0) ) +
                        (cnt-( (cnt/9).toFixed(0) * 9 ))+activeChar
            activeChar=ele
            cnt=1
        }
        if(idx == last){
            activeChar=ele
            genString+= ("9"+activeChar).repeat( (cnt/9).toFixed(0) ) +
                        (cnt-( (cnt/9).toFixed(0) * 9 ))+activeChar
        }
        idx++
    })
    let last2 = genString.length
    var sub = genString.substring(genString.length-4).split('')
    
    
    if(sub[1]==sub[3] && sub[0]!='9')
        last2 -=2
    else 
        last2 = last2
    //if()
    
    return genString.substring(1,last2)
}

//console.log(runLengthEncoding( "AAAAAAAAAAAAABBCCCCDD"))
// 1 1 3  5   7   22a
 
//https://www.algoexpert.io/questions/Palindrome%20Check
function isPalindrome(string) {
    // Write your code here.   
    
    var len = string.length
    
    var last = len-1
    string = string.split('')
    for(let i =0;i<len/2;i++){
        if(string[Math.abs(last-i)] != string[i])
        return false
    }
    return true
  }


function GenNewCharWithNumber(number, char){
    var genString="";
    genString+= ("9"+char).repeat( (number/9).toFixed(0) ) +
    (number-( (number/9).toFixed(0) * 9 ))+char
    //console.log(genString)
    return genString
}

function runLengthEncoding(string) {
    var allChars = string.split(''),
    genString="",
    activeChar="",
    cnt=0,
    last=allChars.length
    
    
    for(let i=0;i<last;i++){
        if(i==0){
            activeChar = allChars[i]
            cnt=1;
            continue;
        }
        else if(i==last-1){
            if(activeChar == allChars[i]){
                cnt+=1;
                genString+=GenNewCharWithNumber(cnt,activeChar)
            }else{
                genString+=GenNewCharWithNumber(cnt,activeChar)
                genString+=GenNewCharWithNumber(1,allChars[i])
            }
        }else{
            if(activeChar==allChars[i]){
                cnt++
            }else{
                genString+=GenNewCharWithNumber(cnt,activeChar)
                activeChar=allChars[i]
                cnt=0;
            }
        }
    }
    return genString
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
console.log(tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
],
[0, 0, 1]))

//   console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
// 1 1 3  5   7   22
// 1 2 5 10  17   


