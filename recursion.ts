const revers = (word) => {
  if (!word) {
    return word;
  }

  const subProblem = word.slice(1);
  const subSolution = revers(subProblem);
  const solution = subSolution + word[0];
  return solution;
};

console.log(revers("test"));
