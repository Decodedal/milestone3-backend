'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_item.init({
    user_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN,
    cart: DataTypes.BOOLEAN,
    quantity:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_item',
    timestamps:false
  });
  return user_item;
};