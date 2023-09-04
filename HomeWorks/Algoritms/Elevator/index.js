function elevator(arr, location) {
  let minDistance = Infinity;
  let index = null;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - location) < minDistance) {
      minDistance = Math.abs(arr[i] - location);
      index = i;
    }
  }
  return index;
}

let array = [10, 20, 30, 40];
let location = 17;
console.log(
  `We send the elevator number ${String.fromCodePoint(
    65 + elevator(array, location)
  )} to the floor number ${location}`
);