// Implement Idempotent Payment Endpoint
// Design an endpoint:
// POST /purchase-course
// Constraints:
// Payment provider may retry webhook 3–4 times
// You must not duplicate course access
// Must handle server crash mid-request


//create a simple payment order first (for db) and then a nother webhook (to verify payment)
const paymentSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  paymentIntentId: { type: String, unique: true }, // from payment provider
  status: { type: String, enum: ["pending", "success", "failed"] },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

app.post('/purchase-course', async function(req,res){
    const {studentId, courseId }= req.body;

          // create payment intent with provider (Stripe, Razorpay etc.)
        const paymentIntent = await createPaymentIntentFromProvider();

        // store pending payment in DB
        await Payment.create({
          studentId,
          courseId,
          paymentIntentId: paymentIntent.id,
          status: "pending"
        });

        //we never enroll students here (only after webhook confirms/ verifies)
})

app.post("/webhook", async (req, res) =>{
    const event = req.body; // In real world verify signature

    if (event.type === "payment.success") {
    const paymentIntentId = event.data.id;

    // Find payment record
    const payment = await Payment.findOne({ paymentIntentId });

    if (!payment) {
      return res.status(400).json({ message: "Payment not found" });
    }

    // If already processed → ignore (IDEMPOTENCY)
    if (payment.status === "success") {
      return res.status(200).json({ message: "Already processed" });
    }

    // Mark payment as success
    payment.status = "success";
    await payment.save();

    //enroll students only after status become success
    await Course.findOneAndUpdate({
        _id: payment.courseId,
        students: { $ne: payment.studentId }
    },
    {
        $addToSet: { students: payment.studentId }
    }
)
}
res.status(200).json({
    received:true
})
})