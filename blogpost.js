// Design the backend for a simple blog platform where users can:
// • sign up and log in
// • create blog posts
// • comment on posts
// • view posts and comments


routes-> user.js (auth- signup/signin)
post.js (to get other posts/ create a post)
comment.js (for leaving comment on others post)

models-> user.js (to store user info) and post.js (post info)

const userSchema= new mongoose.schema({
    fname:{

    },
    lname:{

    },
    email:{

    },
    password:{

    },
}, {
  timestamps: true
})

const postSchema= new mongoose.schema({
    author:{
         type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comments:{

    },

}, {
  timestamps: true
})

const commentSchema= new mongoose.schema({
    author:{
         type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    postId:{

    },
    authorId:{

    }
}, {
  timestamps: true
})

//how to load 1000 comments such api gets no slow
db.comments.createIndex({ postId: 1 }) //indexing

//query to find by page etc
db.comments
  .find({ postId })
  .skip((page - 1) * limit)
  .limit(limit)