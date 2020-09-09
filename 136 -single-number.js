const singleNumber = function (nums) {
  const counter = {};
  for (let num of nums) {
    if (!counter[num]) {
      counter[num] = 1;
    } else {
      counter[num] += 1;
    }
  }

  for (let num in counter) {
    if (counter[num] === 1) {
      return num;
    }
  }
};
