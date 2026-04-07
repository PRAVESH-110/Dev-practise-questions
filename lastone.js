import express from "express";
import jwt from "jsonwebtoken";
JWT_SECRET="pravesh"

const app=express();
app.use(express.json());

const users=[];

router.get('/signin',async function(req,res){
  try{
    const{email, password}= req.body;

  if(!email || !password){
    res.status(400).json({
      message:"enter all credentials"
    })
  }

  const existinguser= await User.findOne({email});

  if(!existinguser){
    res.status(400).json({
      message:"user doesnt exist"
    })
  }

  const comparepass= bcrypt.compare(password, existinguser.password)

  const token = jwt.sign(
    { userId: existingUser._id },
    JWT_SECRET
);  

  res.status(200).json({
    message:"succesfull",
    token
  })

  
  }
  catch(err){
    res.status(401).json({
      message:"failed to signin"
    })
  }

})

app.delete("/api/users", authMiddleware, async function (req, res) {
  try {
    const userId = req.userId; // set by authMiddleware

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Failed to delete user"
    });
  }
});