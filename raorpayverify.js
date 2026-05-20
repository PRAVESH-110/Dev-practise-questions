//verify a webhook request using razorpay of how server verifies the payment
import crypto from "crypto";
import express from  "express"
const app=express();
app.use(express.json())

app.post("/webhook",async function (req,res){
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    const body= JSON.stringify(req.body);

    const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body) // mostly the body is updated with raw data
    .digest("hex");

    const received= req.headers["x-razorpay-signature"];
    if (expectedSignature === receivedSignature) {
    console.log("Webhook verified");
    res.status(200).send();
  } else {
    res.status(400).send("Invalid signature");
  }
})
