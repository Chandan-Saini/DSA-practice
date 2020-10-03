var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
};

// tried two sum leet code