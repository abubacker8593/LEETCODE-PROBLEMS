/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.trim()
    n = n.split("")
    let size = 0
    
    for(let i =n.length-1;i>=0;i--){
        if(n[i]!== " "){
            size++
        }
        else{
            break;
        }
    }

return size;
    
};