module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ first_name: "🚀 init" });
   //create json with seed values into ^^ comment - rocketship or just workbench it
   }
   return Promise.resolve();
};
