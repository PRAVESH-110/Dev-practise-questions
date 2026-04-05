//write db queries to
//1Update mobile number by email
db.users.updateOne(
    {email:"pravdhakal110@gmail.com"},
    {$set:{mobile:"56456789"}}
)

//Q2Find users whose name contains "john" or "John"
db.users.find({name:{$regex:"john",$options:"i"}}, )

//Q3 Add new skill to user
db.users.insertOne(
    {user:user._id}, //finding the user ote update by id first
    {$push:{skills:"MongoDB"}}
)


//Q4Remove a skill
db.users.updateOne(
    {user:user._id},
    {$pull:{skills:"MongoDB"}}
)

//Q5Pagination:page = 2, limit = 10
db.users.find({users}
    .page(2)
    .limit(10)
)

//Q6Find users older than 18 AND from Jaipur
db.users.find({
    $and:[
        {age:{$gte: 18}},
        {city:{$regex:"^jaipur$", $options:"i"}}
    ]
})

//Q7Count users per city
db.users.find(
    {city}
)

//Q8Sort users by age descending
db.users.find({users}).sort({age:-1})