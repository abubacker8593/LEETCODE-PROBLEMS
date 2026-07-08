/**
 * @param {number[][]} accounts
 * @return {number}

 */
var maximumWealth = function(accounts) {
   let x = 0
    let y =0 
    for(let i = 0;i<accounts.length;i++){
        x = 0
        for(let j=0;j<accounts[0].length;j++){
            x += accounts[i][j]
            
        }

        if(y < x){
            y = x
        }
        
    }
    
    return y;
    
    
};