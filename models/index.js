const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


//setting up relations between tables
//Users have many posts that belong to them
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//Each post has many comments that belong to them
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };
