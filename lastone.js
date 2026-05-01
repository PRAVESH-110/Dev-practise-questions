import express from "express";
import jwt from "jsonwebtoken";
JWT_SECRET="pravesh"

const app=express();
app.use(express.json());

const users=[];


router.post('/user',async function(req,res){
  try{
    const {email, password}= req.body;

  if(!email || !password){
    res.status(400).json({
      message:"Enter valid credentials"
    })
  }
  const userId= user._id;
  const existingUser= await User.findOne({userId});

  if(existingUser){
    res.status(403).json({
      message:"Forbidden"
    })
  }

  const hashedPass= await bcrypt.hash(password,10)

  const newUser= await User.create({
    email,
    password:hashedPass
  })

  res.status(201).json({
    message:"New user creates succesfully",
    user
  })
  }

  catch(err){
    res.status(400).json({
      message:"Failed to create user"
    })
  }
})


router.post('/signin',async function(req,res){
  try{
    const{email, password}= req.body;

  if(!email || !password){
    return res.status(400).json({
      message:"enter all credentials"
    })
  }

  const existinguser= await User.findOne({email});

  if(!existinguser){
    res.status(400).json({
      message:"user doesnt exist"
    })
  }

  const comparepass= await bcrypt.compare(password, existinguser.password);

  if(comparepass){
    const token= jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({
    message:"succesfull",
    token
  })
  }
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