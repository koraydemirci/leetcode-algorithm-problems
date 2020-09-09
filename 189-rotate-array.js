const rotate1 = (arr, k) => {
  const arrLength = arr.length;
  const steps = k % arrLength;
  for (let i = 0; i < steps; i++) {
    let previous = arr[arrLength - 1];
    for (let j = 0; j < arrLength; j++) {
      const temp = arr[j];
      arr[j] = previous;
      previous = temp;
    }
  }
};

const rotate2 = (arr, k) => {
  const arrLength = arr.length;
  const copy = new Array(arrLength);
  for (let i = 0; i < arrLength; i++) {
    copy[(i + k) % arrLength] = arr[i];
  }

  for (let i = 0; i < arrLength; i++) {
    arr[i] = copy[i];
  }
};

const rotate3 = (arr, k) => {
  const arrLength = arr.length;
  k %= arrLength;
  let start = 0;
  let count = 0;

  while (count < arrLength) {
    let current = start;
    let prev = arr[start];
    while (true) {
      let nextIdx = (current + k) % arrLength;
      const temp = arr[nextIdx];
      arr[nextIdx] = prev;
      prev = temp;
      current = nextIdx;
      count += 1;

      if (start === current) {
        break;
      }
    }

    start += 1;
  }
};

const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotate4 = (arr, k) => {
  const arrLength = arr.length;
  k %= arrLength;

  reverse(arr, 0, arrLength - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arrLength - 1);
};

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// rotate3(nums, k);

// console.log(nums);
