'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};