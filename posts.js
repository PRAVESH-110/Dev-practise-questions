//create a schema for posts, comments and blogs
{
  _id: ObjectId("..."),
  username: "pravesh",
  email: "pravesh@email.com",
  passwordHash: "hashed_password",
  bio: "Developer",
  createdAt: ISODate("2026-03-06")
}
{
  _id: ObjectId("..."),
  userId: ObjectId("user_id"),
  title: "How JWT works",
  content: "Full explanation...",
  createdAt: ISODate("2026-03-06"),
  updatedAt: ISODate("2026-03-06")
}
{
  _id: ObjectId("..."),
  postId: ObjectId("post_id"),
  userId: ObjectId("user_id"),
  content: "Great article!",
  createdAt: ISODate("2026-03-06") 
}
//nested comments
{
  postId: ObjectId("..."),
  userId: ObjectId("..."),
  content: "reply comment",
  parentCommentId: ObjectId("comment_id")
}