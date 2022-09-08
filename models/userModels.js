const {schema, model} = require("mongoose");

const userSchema = new Schema(
   {
       firstName:{
           type: String,
           require: true,
       },

       lastName:{
           type: String,
           require: true,
       },

       middleName:{
           type: String,
           require: false,
       },

       email:{
           type: String,
           require: false,
       },

       gender:{
           type: String,
           require:true
       },

   }
);

module.exports = model ("User", userSchema);

