const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const SignIn = require('../models/signin');
//Retriiving data
router.get('/page',(req,res,next)=>{
    Register.find(function(err,register){
      res.json(register);
    })
});

//Adding data
router.post('/page',(req,res,next)=>{
  
   let newRegister = new Register({   
      email :req.body.email,
      password : req.body.password,
      confirmpassword : req.body.confirmpassword,
   
      // country :req.body.country
   });

   newRegister.save((err,register)=>{
              if(err){
                res.json({msg:'Failed to add registration'});
              }
              else{
                res.json({msg: 'Registration done successfully'});
               }
     });
});

//Deleting Data
router.delete('/page/:id',(req,res,next)=>{
  Register.remove({_id:req.params.id},function(err,result){
            if(err){
              res.json(err);
            }
            else{
              res.json(result);
            }
      });
});

//   router.delete('/page/:email',(req,res,next)=>{
//     Register.remove({email:req.params.email},function(err,result){
//            if(err){
//              res.json(err);
//            }
//            else{
//              res.json(result);
//               }
//     })
// });

// // Update Data
// router.put('/page/:id',(req,res,next)=>{
// Register.findByIdAndUpdate(req.params.id,function(err,prod){

//       let newRegister = new Register({
//         email :req.body.email,
//         password :req.body.password,
//         confirmpassword : req.body.confirmpassword,
//         // country :req.body.country
//      });

//      newRegister.save((err,register)=>{
//       if(err){
//         res.json({msg:'Failed to add registration'});
//       }
//       else{
//         res.json({msg: 'Registration done successfully'});
//       }
//    });

// });
// });

//Retriving SignIn Data
router.get('/signin',(req,res,next)=>{
SignIn.find(function(err,signin){
    res.json(signin);
  })
});

// Posting SignIn
router.post('/signin',(req,res,next)=>{

   let newSignin = new SignIn({   
      email :req.body.email,
      password : req.body.password
      // country :req.body.country
   });

newSignin.save((err,signin)=>{
              if(err){
                res.json({msg:'Failed to add registration'});
              }
              else{
                res.json({msg: 'Registration done successfully'});
              }
      });
});

module.exports = router;
