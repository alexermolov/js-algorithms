let path = [];
let visited = {};

const breadthFirst = (graph, start) => {
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.pop();
    path.push(current);

    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        queue.unshift(neighbor);
        visited[neighbor] = true;
      }
    }
  }
};

const depthFirst = (graph, start) => {
  const stack = [start];

  while (stack.length > 0) {
    const current = stack.pop();

    visited[current] = true;
    path.push(current);

    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        stack.push(neighbor);
      }
    }
  }
};

const depthFirstRecursive = (graph, start) => {
  visited[start] = true;
  path.push(start);

  for (const neighbor of graph[start]) {
    if (!visited[neighbor]) {
      depthFirstRecursive(graph, neighbor);
    }
  }
};

const graph = {
  0: ["1", "3"],
  1: ["2", "3"],
  2: ["6", "4"],
  3: ["4", "5"],
  4: ["5"],
  5: ["6"],
  6: [],
};

depthFirst(graph, "0");
console.log(path);
visited = {};
path = [];

depthFirstRecursive(graph, "0");
console.log(path);
visited = {};
path = [];

breadthFirst(graph, "0");
console.log(path);

