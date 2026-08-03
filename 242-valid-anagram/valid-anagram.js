/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let anagram = true;
if(s.length !== t.length){
    return false
}
let sb ={

}
for (let char of s){
    if(sb[char]){
        sb[char]++
    }
    else{
        sb[char] = 1
    }
}
for(let char of t){
    if(!(char in sb)){
    return false
    }
    else{
         sb[char]--
      anagram =  sb[char] < 0 ? false : true
      if(!anagram){
        return false
      }
    }
}

    return anagram
};