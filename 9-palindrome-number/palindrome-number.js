/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x<0 ||x%10==0&&x!=0){
        return false
    }
    let num = x
    let revnum = 0
    while(x>0){
        revnum = revnum*10 + x%10
        x = Math.floor( x/10)
    }
    return num === revnum
}