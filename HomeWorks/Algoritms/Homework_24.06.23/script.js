const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];

function findElement(arr1, arr2, k) {
  let i = 0;
  let j = 0;
  let count = 0;
  let result = 0;

  while (count < k) {
    if (i === arr1.length) {
      result = arr2[j];
      j++;
    } else if (j === arr2.length) {
      result = arr1[i];
      i++;
    } else if (arr1[i] <= arr2[j]) {
      result = arr1[i];
      i++;
    } else {
      result = arr2[j];
      j++;
    }

    count++;
  }

  return result;
}

console.log(findElement(arr1,arr2,4));

//Бинарный поиск

const arr = [72, 86, 113, 119, 265, 445, 892];

function binarySearch(arr, target) {
  return binarySearchHelper(arr, target, 0, arr.length - 1);
}

function binarySearchHelper(arr, target, low, high) {
  if (low > high) {
    return -1; 
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearchHelper(arr, target, low, mid - 1);
  } else {
    return binarySearchHelper(arr, target, mid + 1, high);
  }
}

console.log(binarySearch(arr,113));