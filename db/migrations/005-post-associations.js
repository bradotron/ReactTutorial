"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Post belongsTo User
    // User hasMany Post
    return queryInterface
      .addColumn("Posts", "UserId", {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      })
      .then(() => {
        // Comment belongsTo Post
        // Post hasMany Comment

        return queryInterface.addColumn("Comments", "PostId", {
          type: Sequelize.INTEGER,
          references: {
            model: "Posts",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        });
      })
      .then(() => {
        // Post belongsToMany Tag
        // Tag belongsToMany Post

        return queryInterface.createTable("PostTags", {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          PostId: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
          TagId: {
            type: Sequelize.INTEGER,
            primaryKey: true
          }
        });
      })
      .then(() => {
        // User hasMany Comment
        // Comment belongsTo User
        return queryInterface.addColumn("Comments", "UserId", {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id"
          },
          onUpdate: "NO ACTION",
          onDelete: "NO ACTION" 
        });
      })
      .then(() => {
        // Comment belongsTo Comment as Parent
        // Comment hasMany Comment as: Response, foreignKey: ParentId
        return queryInterface.addColumn("Comments", "CommentId", {
          type: Sequelize.INTEGER,
          references: {
            model: "Comments",
            key: "id"
          },
          onUpdate: "NO ACTION",
          onDelete: "NO ACTION"
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    // Post.belongsTo(User)
    // User hasMany Post

    return queryInterface
      .removeColumn("Posts", "UserId")
      .then(() => {
        // Comment belongsTo Post
        // Post hasMany Comments
        return queryInterface.removeColumn("Comments", "PostId");
      })
      .then(() => {
        // Post belongsToMany Tags
        // Tag belongsToMany Post
        return queryInterface.dropTable("PostTags");
      })
      .then(() => {
        // User hasMany Comment
        // Comment belongsTo User
        return queryInterface.removeColumn("Comments", "UserId");
      })
      .then(() => {
        // Comment belongsTo Comment as Parent
        // Comment hasMany Comment as: Response, foreignKey: ParentId
        return queryInterface.removeColumn("Comments", "CommentId");
      });
  }
};
