// We have a simple system with users and posts.
// Each user can create multiple posts.
// I want an API that returns:
// user details
// all posts created by that user
// Question 1:
// How would you design this API and fetch the data?

import express from "express";
const app= express();
app.use(express.json());

//considering User as the collection that 
app.get('/users/:userId',async function(req,res){
    const userId= req.params;

    if(!userId){
        res.status(400).json({
            message:"couldnt access this route"
        })
    }

    const user= await User.findById({userId});

    if(!user){
        res.status(404).json({message:"not found"})
    }

    const posts= await Post.find({userId});
    if(!posts){
        res.status(404).json({message:"not found"})
    }
    return res.status(200).json({
    user,
    posts
  });


})