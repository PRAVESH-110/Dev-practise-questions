//Design:
// GET /todos
// requirements:
// Fetch only logged-in user’s todos
// Support pagination
// Support filtering (completed / not completed)

app.get('/todos', authMiddleware, async function (req, res) {
  try {
    const { page = 1, limit = 10 } = req.query;

    const userId = req.user._id;

    const todos = await Todo.find({ userId })

      .sort({ createdAt: -1 }) //sort by latest creation
      .skip((page - 1) * limit) //tells how many to skip (eg: page=2, skip =10, show next 10)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      todos,
    });

  } catch (err) {
    console.error("Failed to fetch todos:", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.post('/todos',authMiddleware, async function(req,res){
  try{
    const {title, description }= req.body;

  if(!title || !description){
    res.status(400).json({
      message:"Invalid creds"
    })
  }
  const newTodo = await Todo.create({
      title,
      userId: req.user.id, // 🔥 attach logged-in user
    });

    res.status(201).json(newTodo);
  }
  catch(err){
    res.status(500).json({
      message:"Failed"
    })
  }


})