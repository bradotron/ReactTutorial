'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};