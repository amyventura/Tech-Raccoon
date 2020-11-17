module.exports = function(sequelize, DataTypes) {
    const Jobseekers = sequelize.define("Jobseekers", {
       first_name: {
          type: DataTypes.STRING,
          validate: { len: [1, 500] }
       },
       
       last_name: {
        type: DataTypes.STRING,
        validate: { len: [1, 500] }
     },

        yr_exp: {
        type: DataTypes.STRING
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

     github: {
        type: DataTypes.STRING,
        validate: { len: [1, 500] }
     },

     remote: {
        type: DataTypes.STRING
     }

    });
    return Jobseekers;
 };
 