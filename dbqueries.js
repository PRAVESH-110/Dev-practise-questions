//write db queries to
//1Update mobile number by email
db.users.updateOne(
    {email:"pravdhakal110@gmail.com"},
    {$set:{mobile:"56456789"}}
)

//Q2Find users whose name contains "john" or "John"
db.users.find({name:{$regex:"john",$options:"i"}}, ) //^ and $ makes it exact match

//Q3 Add new skill to user
db.users.updateOne(
    {user:user._id}, //finding the user ote update by id first
    {$push:{skills:"MongoDB"}}
)


//Q4Remove a skill
db.users.updateOne(
    {_id:user._id},
    {$pull:{skills:"MongoDB"}}
)

//Q5Pagination:page = 2, limit = 10
const page=2, limit=10;
db.users.find({users}
    .skip((page-1)*limit)
    .limit(limit)
)

//Q6Find users older than 18 AND from Jaipur
db.users.find(
    // $and:[
    //     {age:{$gte: 18}},
    //     {city:{$regex:"^jaipur$", $options:"i"}}
    // ]
    {city:"Jaipur"},
    {age:{$gte:18}}
)
//or simply
db.users.find(
    {age:{$gte: 18}},
    {city:"Jaipur"}
)


//Q7Count users per city
db.users.countOne(
    {city}
)

//Q8Sort users by age descending
db.users.find({}).sort({age:-1})

//9 First sort by age: If same age → sort by name
db.users.sort({}).sort({age:1, name:1})
