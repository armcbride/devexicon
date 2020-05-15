module.exports = function(sequelize, DataTypes) {
    let Definitions = sequelize.define("Definitions", {
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      definition: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      example: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return Definitions;
  };