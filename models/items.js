'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, user_item }) {
      items.belongsToMany(Users,{
        foreignKey: "item_id",
        as:"user",
        through: user_item
      })
    }
  }
  items.init({
    item_id:{
      type:DataTypes.INTEGER,
      primaryKey:true
    }
  }, {
    sequelize,
    modelName: 'items',
    timestamps:false
  });
  return items;
};