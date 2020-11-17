module.exports = function(sequelize, DataTypes) {
    const Jobs = sequelize.define("Jobs", {
       comp_name: {
          type: DataTypes.STRING,
          validate: { len: [1, 500] }
       },

       job_descrip: {
        type: DataTypes.STRING,
        validate: { len: [1, 500] }
     },
     comp_name: {
        type: DataTypes.STRING,
        validate: { len: [1, 500] }
     },

     education_id: {
        type: DataTypes.STRING
     },

     primary_tech_id: {
        type: DataTypes.STRING
     },

     secondary_tech_id: {
        type: DataTypes.STRING
     },

     remote: {
        type: DataTypes.STRING
     }

    });
    return Jobs;
 };