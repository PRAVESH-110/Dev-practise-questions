//Build a GET /api/users/search endpoint that allows searching users by name or email using query parameters
const express= require ('express')

app.get('/api/users',async function(req,res){
    try{
        const {query}= req.query;
    if(!query){
        return res.status(400).json({
        message: "Search query is required"
      });
    }   
    
    const users = await User.find({
      $or: [ //match if any one condition is true
        { name: { $regex: query, $options: "i" } }, //Find users where: name contains query (ignore case)
        { email: { $regex: query, $options: "i" } } //Find users where: email contains query (ignore case)
      ]
    }).select("-password");  //means exclude password

    res.status(200).json({
      count: users.length,
      users
    });
    } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }

})