/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = 1
    for(i=1;i< nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[n]=nums[i]
            n++

        }
    }
    return n;
};