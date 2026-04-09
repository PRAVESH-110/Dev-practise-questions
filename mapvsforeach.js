//map- returns the diiferent array with function implemented
const myAwesomeArray = [5, 4, 3, 2, 1]
console.log(myAwesomeArray.map(numbers=>numbers*10));
console.log(myAwesomeArray)


//foreach- returns the same modified array
const mynewArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
] //foreach has no return value/ modify/ store array we use it to perform side effects such as log details, apis
mynewArray.forEach(element => console.log(element.name))


const users = [
  { id: 1, email: "john@gmail.com" },
  { id: 2, email: "ali@gmail.com" },
  { id: 3, email: "mass@gmail.com" }
];

// We are triggering API calls, not building a new array.
users.forEach(user => {
  fetch("/api/sendNotification", {
    method: "POST",
    body: JSON.stringify({ email: user.email })
  });
});


let arr1=[1,2,3,4,5];
arr1.forEach(num=>num*10); //only modifies but not store aywhere as it has not return value
console.log(arr1);