// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_name will be a string, with null being false
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    // price will be a decimal that can be null, and validates if it is a decimal
    price:{
      type:DataTypes.DECIMAL,
      allowNull: true,
      validate:{
        isDecimal: true
      }
    },
    // stock will be an integer that cant be null, with a default value of 10, and validates if it is a numeric value
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    // category_id is a in integer and is referenced from the model in the Category.js file
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
