module.exports = function (sequelize, DataTypes) {
   const Education = sequelize.define('Education', {
      name: {
         type: DataTypes.STRING,
         validate: {
            len: [1, 500]
         }
      }
   });
   return Education;
};