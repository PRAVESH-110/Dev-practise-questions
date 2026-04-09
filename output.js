//fix it to print : 0  1  2

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// let creates a new block-scoped variable for each loop iteration, so each callback 
// captures the correct value instead of sharing a single variable like var

//whats output of:
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }
3
3
3
//since var is function scoped, the i will be shared between