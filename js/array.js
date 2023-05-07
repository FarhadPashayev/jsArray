// first task
let arr = [1, 2, 3, 4, 4];
let duplicateNum = 0;
function duplicateFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        duplicateNum = arr[i];
      }
    }
  }
  return duplicateNum;
}
console.log(duplicateFunc(arr));

let array = [1, 2, 3, 4, 4, 2];
let duplicateNums = [];
function duplicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        duplicateNums.push(array[i]);
      }
    }
  }
  return duplicateNums;
}
console.log(duplicate(array));

// second task

let array1 = [4, 8, 9, 10, 1, 5, 3];
console.log(Math.max(...array1));


let array = [4, 8, 9, 10, 1, 5, 3];
function maximum(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(maximum(array));


// final task

let array = [4, 8, 9, 10, 1, 5, 3];
function double(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
    array.splice(i, 1, array[i]);
  }
  return array;
}
console.log(double(array));