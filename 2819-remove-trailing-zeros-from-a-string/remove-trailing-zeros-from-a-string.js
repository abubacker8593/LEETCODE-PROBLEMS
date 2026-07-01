/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    num.toString();
    let x =0;
    for(let i=num.length-1;i>=0;i--){
        
        
        if(num[i]!=="0"){
            
            x = i;
            break;

        }

    }
    return num.slice(0,x+1);
};