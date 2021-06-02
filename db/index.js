'use strict';

const Sequelize = require('sequelize');
const PostModel = require('./models/post.js');
const UserModel = require('./models/user.js');
const TagModel = require('./models/tag.js');
const CommentModel = require('./models/comment.js');

const config = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "dialect": "mssql",
  "dialectOptions": {
    instanceName: 'dev-Bjensen',
    trustedConnection: true  
  }
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Post = PostModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

Post.belongsTo(User);

Comment.belongsTo(Post);

Post.hasMany(Comment);

Post.belongsToMany(Tag, {
  through: 'PostTags'
});

User.hasMany(Post);

User.hasMany(Comment);

Tag.belongsToMany(Post, {
  through: 'PostTags'
});

Comment.belongsTo(User);

Comment.belongsTo(Comment);

Comment.hasMany(Comment);

module.exports = {
  sequelize,
  Sequelize,
  Post,
  User,
  Tag,
  Comment
}