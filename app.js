// Use iteration to create the sequence
function fibs(n) {
  const array = [];
  // Prevent access to negative indices
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i < n; i += 1) {
    array[i] = (array[i - 1] + array[i - 2]);
  }
  return array;
}

fibs(13);
