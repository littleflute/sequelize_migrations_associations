'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shop = sequelize.define('shop', {
    name: DataTypes.STRING
  }, {});
  Shop.associate = function(models) {
    // Shop hasMany Coffees
    Shop.hasMany(models.Coffee);
  };
  return Shop;
}; 