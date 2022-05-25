const inp = [2, 4, 3, 1, 6];
const inp2 = [2, 4, 6, 1, 3];

function swapCount(inp: number[]): number {
  let min = Infinity;
  let max = -Infinity;

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < inp.length; i++) {
    if (min > inp[i]) {
      min = inp[i];
      minIndex = i;
    }

    if (max < inp[i]) {
      max = inp[i];
      maxIndex = i;
    }
  }

  if (maxIndex < minIndex) {
    return minIndex + (inp.length - 1) - maxIndex - 1;
  } else {
    return minIndex + (inp.length - 1) - maxIndex;
  }
}

console.log(swapCount(inp));
console.log(swapCount(inp2));
