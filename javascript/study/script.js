let nums = [1, 3, 1, 4, 4, 3, 1];
        //[1, 3, 4, 1, 1, 3, 4]
for(let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] == 4) {
                let temp = nums[i+1];
                nums[i+1] = 4;
                nums[j] = temp;
            }
        }
    }
}
console.log(nums);

for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 4 && nums[i-1] != 3) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] == 3) {
                let temp = nums[j+1];
                nums[j+1] = 4;
                nums[i] = temp;
            }
        }
    }
}
console.log(nums);