/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
let freq = {}
    for(let i =0;i<nums.length;i++){
        
        let x = nums[i]
        if(freq[x]){
            console.log('came')
            freq[x]++
        }else{
            freq[x] = 1
        }
        console.log(freq)
    }

    for(let i = 0;i<nums.length;i++){
       for(let j =0;j<nums.length;j++){
        if(freq[nums[i]] < freq[nums[j]] ){
            [nums[i],nums[j]] = [nums[j],nums[i]]
        }else if (freq[nums[i]]==freq[nums[j]]){
            nums[i] > nums[j] ?  [nums[i],nums[j]] = [nums[j],nums[i]] :
             [nums[i],nums[j]] = [nums[i],nums[j]]
        }
       }
    }
    return nums
    
};