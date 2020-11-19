module.exports = function (sequelize, DataTypes) {
   const Technologies = sequelize.define('Technologies', {
      name: {
         type: DataTypes.STRING,
         validate: {
            len: [1, 500]
         }
      }
   });
   return Technologies;
};