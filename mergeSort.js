function merge(left, right) {
  const sortedArr = [];
  const sortedLength = left.length + right.length;
  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < sortedLength; i += 1) {
    // Make sure there is a number in the array index
    if (
      (left[leftIndex] && right[rightIndex])
      || left[leftIndex] === 0
      || right[rightIndex] === 0
    ) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArr.push(left[leftIndex]);
        leftIndex += 1;
      } else if (right[rightIndex] < left[leftIndex]) {
        sortedArr.push(right[rightIndex]);
        rightIndex += 1;
      } else {
        // Left side is added first on equal numbers
        sortedArr.push(left[leftIndex]);
        leftIndex += 1;
      }
    } else if (!left[leftIndex] && left[leftIndex] !== 0) {
      // Push the remaining elements after one array has been emptied
      const rightRemnants = right.slice(rightIndex, right.length);
      sortedArr.push(...rightRemnants);
      break;
    } else if (!right[rightIndex] && right[rightIndex] !== 0) {
      const leftRemnants = left.slice(leftIndex, left.length);
      sortedArr.push(...leftRemnants);
      break;
    }
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
