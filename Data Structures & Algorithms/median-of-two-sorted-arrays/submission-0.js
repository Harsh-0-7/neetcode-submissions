class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
        let n1 = nums1.length, n2 = nums2.length;
        let l = 0, r = n1, mid1, mid2,max1,max2,min1,min2;
        while (l <= r) {
            mid1 = Math.floor((r + l) / 2);
            mid2 = Math.floor((n1 + n2 + 1) / 2) - mid1;

            max1 = (mid1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
            max2 = (mid2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];

            min1 = (mid1 === n1) ? Number.MAX_SAFE_INTEGER : nums1[mid1];
            min2 = (mid2 === n2) ? Number.MAX_SAFE_INTEGER : nums2[mid2];

            if (max1 <= min2 && max2 <= min1) {
                if ((n1 + n2) % 2 === 0) {
                    return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
                } else {
                    return Math.max(max1, max2);
                }
            } else if (max1 > min2) {
                r = mid1 - 1;
            } else l = mid1 + 1;
        }
    }
}
