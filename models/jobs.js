module.exports = function (sequelize, DataTypes) {
   const Jobs = sequelize.define('Jobs', {
      comp_name: {
         type: DataTypes.STRING,
         validate: {
            len: [1, 500]
         }
      },

      job_descrip: {
         type: DataTypes.STRING,
         validate: {
            len: [1, 500]
         }
      },

      primary_tech_id: {
         type: DataTypes.STRING
      },

      secondary_tech_id: {
         type: DataTypes.STRING
      },

      job_email: {
         type: DataTypes.STRING
      },

      remote: {
         type: DataTypes.STRING
      }

   });
   return Jobs;
};