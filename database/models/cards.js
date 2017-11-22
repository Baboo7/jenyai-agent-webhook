'use strict';

module.exports = (sequelize, DataTypes) => {
  var cards = sequelize.define('cards', {
    src: DataTypes.STRING(1024),
    skillId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cards;
};
