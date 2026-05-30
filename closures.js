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
console.log(counter2()); // 1 since in others a reference is created but in case of
// coutner 2 count is old and no link to old counter value
console.log(counter()); // 3


//find the output
let name = "Global";

function printName() {
  console.log(name);
}

function test() {
  let name = "Local";

  printName();
}

test();
//Global-- since the function remember the scope of its creation not calling (lexical)


//find output
function createLogger(prefix) {

  return function(message) {
    console.log(`${prefix}: ${message}`);
  }

}

const errorLogger = createLogger("ERROR");

errorLogger("DB Down");
//ERROR: DB Down


//output of:
for(var i=1;i<=3;i++){

  setTimeout(()=>{
    console.log(i);
  },1000);

}
//4
//4
//4
