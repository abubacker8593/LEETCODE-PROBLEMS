/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maximum = nums[0];
    let sum = 0;

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 0; i < nums.length; i++) {

        if (sum <= 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }

        if (sum > maximum) {
            maximum = sum;
            start = tempStart;
            end = i;
        }
    }

    return maximum;
};