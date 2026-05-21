app.post('/reset-pass',async function(req,res){
    const{email}= req.body;

    const existingUser= await db.Users.findOne({email});

    if(!existingUser){
        res.status(400).json({
            message:"User not found"
        })
    }

    const temporaryToken= await crypto.generateRandom(32);

    //hash before storing in db (because if db leak risk-> attackers can access passwords)
    const hashedToken= crypto
    .createHash("sha156")
    .update(resetToken)
    .digest("hex");
    
    user.resetPasswordToken= hashedToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    //send reset url in the email (raw version)
    const resetURL =`http://localhost:3000/reset-password/${resetToken}`;

    //frontend send reset token by clicking in link
    //POST /reset-password/:token  (token from url)

    //verify token
    const hashednewtoken= crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    //verify password matching to see if the token is same
    const user = await User.findOne({
  resetPasswordToken: hashedToken,
  resetPasswordExpire: { $gt: Date.now() }
});

    user.password= await bcrypt.hash(req.body.password,10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

})
