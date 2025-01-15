/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0) return[];

    let solonums = 0;

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[solonums]){
            solonums++;
            nums[solonums] = nums[i];
        }
    }

   return solonums + 1;
};
