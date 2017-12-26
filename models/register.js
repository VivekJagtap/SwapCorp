const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    email:{
         type : String,
         required  :true
          },

    password:{
         type : String,
         required :true  
          },

    confirmpassword:{
         type : String,
         required : true 
        }
         
});


const Register = module.exports = mongoose.model('Register',registerSchema);

