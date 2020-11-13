module.exports = function(sequelize, DataTypes) {
    const Tech = sequelize.define("Tech", {
       name: {
          type: DataTypes.STRING,
          validate: { len: [1, 500] }
       }
    });
    return Tech;
 };