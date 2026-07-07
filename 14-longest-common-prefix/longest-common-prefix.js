/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    let x =prefix.length

    for(let i =1;i<strs.length;i++){
        let prefi = true
        while(!strs[i].startsWith(prefix)){
                prefix =prefix.slice(0,-1)
        }

        
    }
    return prefix
    
};