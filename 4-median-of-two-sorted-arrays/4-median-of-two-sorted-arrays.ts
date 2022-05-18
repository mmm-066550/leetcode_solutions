function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  return nums.length % 2 === 0
    ? (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2
    : nums[Math.floor(nums.length / 2)];
};