// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  const unsortedArr = arr.slice();
  const sortedArr = [];
  // walk through the unsorted array while it is not empty
  while (unsortedArr.length > 0) {
    console.log(sortedArr.join(','))
    // create j to identify the insertion poistion
    // pop the element from the unsorted array
    const elementToInsert = unsortedArr.pop();
    // make a slot for new insertion
    sortedArr.push(null);
    let j = sortedArr.length - 1;
    while (j > 0) {
      // check to the left of the new position to see if shifting is required
      if (sortedArr[j - 1] > elementToInsert) {
        sortedArr[j] = sortedArr[j - 1];
        j--;
      } else {
        break;
      }
    }
    sortedArr[j] = elementToInsert;
  }
  return sortedArr;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
 // Your code here
 let divider = 1;
 while (divider < arr.length) {
  console.log(arr.join(','))
   // create a variable j to track our insertion point
   let j = divider;
   // store the element at current divider position in temp
   let temp = arr[divider];
   // iterate through the left half of the divider while shifting that half until we reach a value
   // that is less than the val at the divider
   while (j > 0) {
     // if the element to the left of the current insertion position is greater, then shift it by 1
     if (arr[j - 1] > temp) {
       arr[j] = arr[j - 1];
       j--;
     } else {
       break;
      }
    }
    arr[j] = temp;
    divider++;
 }
 return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
