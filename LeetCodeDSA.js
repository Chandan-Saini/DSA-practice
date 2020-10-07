var rotate = function (nums, k) {
  var arr = [];
  for (var i = 0; i < k; i++) {
    arr.push(nums[i]);
    nums[i] = nums[nums.length - 1];
  }

  return arr.concat(nums);
};


console.log(rotate([1,2,3,4,5,6,7],3))