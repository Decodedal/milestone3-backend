'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ items, user_item }) {
      Users.belongsToMany(items,{
        foreignKey:'user_id',
        as:'items',
        through: user_item
      })
    }
  }
  Users.init({
    user_id:{
       type:DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement:true 
      },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName:'Users',
    timestamps:false
  });
  return Users;
};