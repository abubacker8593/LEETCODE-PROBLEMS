/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    area =0
    let right = height.length-1;
    let left=0
    while(left<right){
        let x = Math.min(height[left],height[right])*(right-left)
        if(x>area){
            area = x
        }
        if(height[left]>height[right]){
            right--
        }else{
            left++
        }
    
}
    return area
}
    
