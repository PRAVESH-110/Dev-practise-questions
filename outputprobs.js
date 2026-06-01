console.log([] == ![]);
console.log([] === ![]);
console.log([0] == false);
console.log([0] === false);
console.log(null == 0);
console.log(undefined == 0);
console.log("" == false);
console.log("0" == false);
console.log([] == "");
console.log([1] == true);

//learning
[] == false          // true
[] == 0              // true
[] == ""             // true

null == undefined    // true

NaN == NaN           // false  

{} == {}             // false
[] == []             // false

"5" == 5             // true
"5" === 5            // false

false == 0           // true
false === 0          // false

Boolean([])          // true
Boolean({})          // true
