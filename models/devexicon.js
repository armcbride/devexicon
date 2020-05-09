module.exports = function(sequelize, DataTypes) {
    var definitions = sequelize.define("Definitions", {
      title: {
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
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return definitions;
  };