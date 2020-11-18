// module.exports = function (table) {
//    if (process.env !== "production") {
//       console.log("\n🚀 init table seed");
//       return table.create({
//             first_name: "Amy",
//             last_name: "Ventura",
//             yr_exp: "3",
//             education_id: "Bootcamp",
//             primary_tech_id: "Frontend",
//             secondary_tech_id: "Backend",
//             github: "amyventura",
//             remote: "True",
//             email: "amyvntr@gmail.com"
//          }
//       );
//       //create json with seed values into ^^ comment - rocketship or just workbench it
//    }
//    return Promise.resolve();

// };

module.exports = function (db) {
   console.log("\n🚀 init table seed");
   if (!(db && db.Jobseekers)) {
      throw new Error("no jobseekers in database");
   }
   return Promise.all([
      db.Jobseekers.create({
         first_name: "Amy",
         last_name: "Ventura",
         yr_exp: "3",
         education_id: "Bootcamp",
         primary_tech_id: "Frontend",
         secondary_tech_id: "Backend",
         github: "amyventura",
         remote: "True",
         email: "amyvntr@gmail.com"
      }),
      db.Jobseekers.create({
         first_name: "John",
         last_name: "Fan",
         yr_exp: "5",
         education_id: "University",
         primary_tech_id: "Design",
         secondary_tech_id: "Frontend",
         github: "johnf",
         remote: "False",
         email: "johnf@gmail.com"
      }),
      db.Jobseekers.create({
         first_name: "Quinn",
         last_name: "Dong",
         yr_exp: "2",
         education_id: "Bootcamp",
         primary_tech_id: "Backend",
         secondary_tech_id: "Frontend",
         github: "qudoki",
         remote: "True",
         email: "qdong327@gmail.com"
      }),
      db.Jobseekers.create({
         first_name: "Izzy",
         last_name: "Mercado",
         yr_exp: "4",
         education_id: "Bootcamp",
         primary_tech_id: "UX/UI",
         secondary_tech_id: "Frontend",
         github: "izzymercado",
         remote: "False",
         email: "ismaelgmercado@gmail.com"
      }),
      db.Jobs.create({
         comp_name:"Amazon", 
         job_descrip:"Professional non-internship experience with front end, web or mobile software development using JavaScript, HTML and CSS", 
         primary_tech_id:"Back-End", 
         secondary_tech_id:"Front-End", 
         job_email:"amazonjobs@gmail.com",
         remote:"True"
      }),
      db.Jobs.create({
         comp_name:"The Upper Crust", 
         job_descrip:"Local pizza shop looking for a custom website from an experienced developer!", 
         primary_tech_id:"Back-End", 
         secondary_tech_id:"Front-End", 
         job_email:"pizzatown@gmail.com",
         remote:"True"
      }),
      db.Jobs.create({
         comp_name:"Google", 
         job_descrip:"Professional non-internship experience with front end, web or mobile software development using node.js, SQL, and servers.", 
         primary_tech_id:"Back-End", 
         secondary_tech_id:"UX/UI", 
         job_email:"googlers@gmail.com",
         remote:"False"
      })

   ]);
};