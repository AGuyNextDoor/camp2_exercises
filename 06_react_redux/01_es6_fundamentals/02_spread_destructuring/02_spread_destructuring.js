function go(options) {
  const {
    speed = 4,
    enable = { hyperdrive= false, frobnifier= true} = {}
  } = options;

  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
  console.log(options);
}

go({ speed: 5 });

function lastIndexOf(arr, elt, start = arr.length) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

function replace(array, from, to, elements) {
  array.splice(from, to-from, ...elements);
}

const testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

function copyReplace(array, from, to, elements) {
  return [...array.slice(0, from),...elements),...array.slice(to)];
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
