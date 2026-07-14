/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let sum=0;
    let last = "";
     n = n.toString();
    for(let i =0;i<n.length;i++){
        if(n[i]!=0){
            last +=n[i]
            sum+=Number(n[i])
            console.log(n[i])
            
        }
    }

    console.log(last)
    console.log(sum)
    let x = last * sum
    
    return x;
};