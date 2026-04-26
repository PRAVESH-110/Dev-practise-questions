//create a jwt middleware to access a protected route
const jwt= require('jsonwebtoken')
const JWT_SECRET = "supersecretkey"; // use env in real apps

const authMiddleware=(req, res, next)=>{
    try{
        const authheader= req.headers.authorization;

        if (!authheader || !authheader.startsWith("Bearer ")){
            res.status(400).json({
                message:"authorization header incorrect"
            })
        }

        const token= authheader.split(" ")[1];

        const decoded= jwt.verify(token, JWT_SECRET);

        req.user= decoded; //decode the user object to be used in other places, routes etc

        next();

    }
    catch(err){
        res.status(400).json({
            message: "failed to verify"
        })
    }

    
}

