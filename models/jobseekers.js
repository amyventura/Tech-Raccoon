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
        type: DataTypes.INTEGER
     },

     education_id: {
        type: DataTypes.INTEGER
     },

     primary_tech_id: {
        type: DataTypes.INTEGER
     },

     secondary_tech_id: {
        type: DataTypes.INTEGER
     },

     github: {
        type: DataTypes.STRING,
        validate: { len: [1, 500] }
     },

     remote: {
        type: DataTypes.BOOLEAN
     }

    });
    return Jobseekers;
 };
 