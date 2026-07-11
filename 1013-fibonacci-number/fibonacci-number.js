/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if(n==2||n==1){
        return 1;
    }
    else if(n<1){
        return 0
    }
    
    let a = 0
    let b = 1
    let next = 0
    for(let i = 1;i<n;i++){ 
        next = a+b
        a= b
        b = next
    }
    return next
};