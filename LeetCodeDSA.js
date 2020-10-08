var findSame = function (nums) {
  var shortNums= nums.sort(function (a,b) {
    return a-b
  })
     console.log(shortNums);
  for (var i = 0; i < nums.length; i++) {
      if(shortNums[i]===shortNums[i+1]){
        return shortNums[i]
      }else{
        return undefined
      }
  }
};


console.log(findSame([2,1,9,33]))