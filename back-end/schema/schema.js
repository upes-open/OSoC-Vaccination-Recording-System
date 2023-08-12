const mongoose = require("mongoose");

const schema = mongoose.Schema({
   //YOUR BACK-END SCHEMA HERE { name : string , address, string }
   date:String,
   time:String,
   description:String,
   name:String,
   dob:String,
   contact:String,
   preferredMethod:String,
   vaccinationType:String
})

const schema_looker = mongoose.model("routes", schema);
module.exports = schema_looker;
