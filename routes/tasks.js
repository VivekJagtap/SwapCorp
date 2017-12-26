var express = require('express');
var router = express.Router();

router.get('/page3',function(req,res,next){
    res.send('TASK API');
});

module.exports=router;
