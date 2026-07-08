/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = new Map([
 ["I",1],
["V",5],
["X",10],
["L",50],
["C", 100],
["D",500],
["M",1000]
    ]
    )
let num =s.split("")
let sum = 0
num.forEach((x,i,arr)=>{
    let next = roman.get(arr[i+1]) || 0
    let current = roman.get(x)
    if(current < next){
        sum -=current
    }
    else{
        sum +=current
    }

})
 return sum;
}