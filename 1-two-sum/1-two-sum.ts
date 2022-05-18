function twoSum(nums: number[], target: number): number[] {
for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const num2 = nums[j];
      if (
        num1 + num2 === target &&
        nums.indexOf(num1) !== nums.lastIndexOf(num2) &&
        nums.indexOf(num1) < nums.lastIndexOf(num2)
      ) {
        return [nums.indexOf(num1), nums.lastIndexOf(num2)];
      }
    }
  }
};