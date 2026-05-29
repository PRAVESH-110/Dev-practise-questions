function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
const counter2= createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter2()); // 1 since in others a reference is created but in case of coutner 2 count is old and no link
console.log(counter()); // 3