var rotate = function (nums, k) {
  var arr = [];
  for (var i = 0; i < nums; i++) {
    arr.push(nums[i]);
    nums[i] = nums[nums.length - 1];
  }

  return arr.concat(nums);
};
