const users = [
  { name: "ram", age: 18 },
  { name: "shyam", age: 21 },
  { name: "mohan", age: 25 }
];

// Q1: Return total age of all users
// Q2: Return only users with age >= 21 (using reduce, NOT filter)
// Q3: Return an object like:
// {
//   ram: 18,
//   shyam: 21,
//   mohan: 25
// }

// Q1: Return total age of all users

let sum=0;
const ages= users.reduce((sum,user)=>{
  return sum+user.age;
},sum);

// Q2: Return array of users with age >= 21 (using reduce, NOT filter)

const adult= users.reduce((acc,user)=>{
  if(user.age >=21 ) acc.push(user);
  return acc;
},[])

// Q3: Return an object like:
// {
//   ram: 18,
//   shyam: 21,
//   mohan: 25
// }
const userMap =users.reduce((obj, user)=>{
  obj[user.name] =user.age;
  return obj;
},{})




