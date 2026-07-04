/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let arr = [...nums1.splice(0,m),...nums2];

    
    
    for(let i = 0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    for(z=0;z<arr.length;z++){
        nums1[z]=arr[z]
    }
};