const users = [
  { name: "ram", age: 18 },
  { name: "shyam", age: 21 },
  { name: "mohan", age: 25 }
];

// Q1: return users with age >= 21
// Q2: return array of names only
// Q3: add isAdult: true/false


// Q1: return users with age >= 21
const adults=users.filter(user=>user.age>=21);
console.log(adults);

// Q2: return array of names only
const names=[
  users.map(names=>names.name)
] 

// Q3: add isAdult: true/false
const addAdult=()=>{
  return users.map(prev=>({
    ...prev,
    isAdult: prev.age>=18
  }))
}

