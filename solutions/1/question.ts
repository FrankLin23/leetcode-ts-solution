function twoSum(nums: number[], target: number): number[] {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (!map.has(target - nums[i])) {
			map.set(nums[i], i);
		} else {
			return [map.get(target - nums[i]), i];
		}
	}
	return [];
}
