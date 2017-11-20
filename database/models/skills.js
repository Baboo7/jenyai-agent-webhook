'use strict';

module.exports = (sequelize, DataTypes) => {
  var skills = sequelize.define('skills', {
    grade: DataTypes.STRING(5),
    chapter: DataTypes.STRING(5),
    skill: DataTypes.STRING(5),
    subskill: DataTypes.STRING(5),
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return skills;
};
