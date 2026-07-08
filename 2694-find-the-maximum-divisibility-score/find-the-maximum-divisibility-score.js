/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let score = 0
    let realscore = 0
    bestdiviser = divisors[0]
    let j = 0
    for(let i=0;i<divisors.length;i++){
        score = 0
        j=0
       while(j<=nums.length-1){
        nums[j]%divisors[i]==0 ? (score++,j++) :j++

       }
       if(realscore<score){
        realscore = score
        bestdiviser = divisors[i]
       }
       else if(realscore==score && divisors[i]<bestdiviser){
        bestdiviser = divisors[i]
       }
    }
    return bestdiviser
};