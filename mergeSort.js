/*
PSEUDOCODE

function mergesort(arr){
   left = first halp
  right = right half
  if(length of arr is 1 )
    then return arr 
   return merge(mergesort(left), mergesort(right))

  func merge(arr1,arr2){
  const result = []
  i=0;
  j=0
  while(i<arr1.length && j< arr2.length) 
  do if(arr1[i]<arr2[j]) then push arr1[i] to result and increment i++
  else push arr2[j] to result and increment j++
  while(i<arr1.length)
  do push arr1[i] to result and increment i

  do this same for j

   return result 
     }
}

*/

function mergesort(arr) {
  let middle_index = Math.floor(arr.length / 2);
  let left_half = arr.slice(0, middle_index);
  let right_half = arr.slice(middle_index, arr.length);
  if (arr.length === 1) {
    return arr;
  }
  return merge(mergesort(left_half), mergesort(right_half));

  function merge(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    // to check for remaining elements

    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
}
console.log(
  mergesort([
    51, 20, 3, 42, 5, 3, 432, 45, 4, 0.543, 6, 2, 35, -45, 2, 23, 4, 32, 23, 4,
    234, 325, 5, 345, 43, 543, 543, 534, 623, 5, 324, 5235, 67, 67878, 56, 8768,
    7778, 78, 787, 9797, 978, 62, 7,
  ])
);
