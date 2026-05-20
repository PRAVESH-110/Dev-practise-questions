//Implement rate-limiting.
const express = require("express");
const rateLimit = require("express-rate-limit");

const limiter= rateLimit({
    //ping the time after limit reached- 15min
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        error:"too many limits, please try again after 15 minutes"
    }
    });

    //rate limit per userId
const limiterbyId= rateLimit({
    windowMs:15*60*1000,
    max:100,
    standardHeaders: true, 
    legacyHeaders: false, //old format
    keyGenerator:function(req){
        return req.user._id
    }
},
// keyGenerator:(req)=>{
    
)

const app = express();
app.use(express.json());
app.use(limiter);
