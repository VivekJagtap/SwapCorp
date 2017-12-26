
var express =  require('express');
var mongoose =  require('mongoose');
var bodyParser = require('body-parser');
var cors =  require('cors');
var path = require('path');
var app  = express();

//ports
const port = 3000;
const route = require('./routes/route');

// connect to mongodb
  mongoose.connect('mongodb://localhost:27017/swapcorp');

// on connection
  mongoose.connection.on('connected',()=>{  
      console.log('Connected to database mongodb @ 27017 successfully');
  })

  mongoose.connection.on('error',(err)=>{
      if(err)
      {
          console.log('Error in database connection'+err);
      }
   
})


//adding  middleware cors
app.use(cors());

//body parser
app.use(bodyParser.json());

//Routes
app.use('/api',route);


// Static Folder
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>{
     console.log('Server started at port:'+port);
});

//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
});



