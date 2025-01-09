function merge(left, right) {
  const sortedArr = [];
  // Make sure there is a number in the array index
  if (!left.length && !right.length) {
    return sortedArr;
  }
  if (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left[0]);
      left.shift();
      return sortedArr.concat(merge(left, right));
    }
    if (right[0] < left[0]) {
      sortedArr.push(right[0]);
      right.shift();
      return sortedArr.concat(merge(left, right));
    }
    if (left[0] === right[0]) {
      // Left side is added first on equal numbers
      sortedArr.push(left[0]);
      left.shift();
      return sortedArr.concat(merge(left, right));
    }
  } else if (!left.length) {
    // Push the remaining elements after one array has been emptied
    const rightRemnants = right.slice(0, right.length);
    sortedArr.push(...rightRemnants);
    return sortedArr;
  } else if (!right.length) {
    const leftRemnants = left.slice(0, left.length);
    sortedArr.push(...leftRemnants);
    return sortedArr;
  }
  return sortedArr;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const mid = array.length / 2;
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid, array.length);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

const testArr = [3, 2, 1, 13, 8, 5, 0, 1];

mergeSort(testArr);
