const arr = [5,4,3,2,1,10,9,56];

function mergeSort (arr) {
    const len = arr.length;
    const mid = Math.floor(len/2);
    if (len===1){
        return arr;
    }

    const first = new Array(mid);
    const second = new Array(len-mid);

    for (let i = 0; i < mid; i++) {
        first[i] = arr[i];        
    }

    for (let i = 0; i < len-mid; i++) {
        second[i] = arr[i+mid];
    }

    return merge(mergeSort(first),mergeSort(second));    
}

function merge(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const arr = new Array(len1 + len2);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            arr[k++] = arr1[i++]
        } else {
            arr[k++] = arr2[j++]
        }
    }

    while (i < len1) {
        arr[k++] = arr1[i++]
    }

    while (j < len2) {
        arr[k++] = arr2[j++]
    }
    return arr;
}

const newArr = mergeSort(arr);
console.log(newArr);

//2
function plusOne(arr) {
    let one = 1;
    
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] += one;
      one = Math.floor(arr[i] / 10);
      arr[i] %= 10; 
    }
    
    if (one === 1) {
      arr.unshift(1);
    }
    
    return arr;
  }
  
  const number = [1, 2, 9];  
  const result = plusOne(number);
  console.log(result);  
  