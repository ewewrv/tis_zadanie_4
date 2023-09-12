function solveQueueOperations(operations) {
  let queue = [];

  for (let operation of operations) {
    let params = operation.split(" ");

    if (params[0] === "WORRY") {
      queue[parseInt(params[1])] = true;
    } else if (params[0] === "QUIET") {
      queue[parseInt(params[1])] = false;
    } else if (params[0] === "COME") {
      let k = parseInt(params[1]);

      if (k > 0) {
        queue = queue.concat(new Array(k).fill(false));
      } else {
        queue = queue.slice(0, k);
      }
    } else if (params[0] === "WORRY_COUNT") {
      let count = queue.filter((person) => person === true).length;
      console.log(count);
    }
  }
}

let operations = [
  //операции которые должна выполнить функция
  "COME 5",
  "WORRY 1",
  "WORRY 4",
  "COME -2",
  "WORRY_COUNT",
  "COME 3",
  "WORRY 3",
  "WORRY_COUNT",
];

solveQueueOperations(operations);
