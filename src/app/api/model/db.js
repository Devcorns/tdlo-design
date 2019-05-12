var mongoose = require('mongoose');
var schema = require('./schema/company-schema');
var mongodbUri ='mongodb://@ds231723.mlab.com:31723/emprating';
let username="self";
let lpassword = "self123"
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
    user: username,
    password:lpassword 
  }
})
var conn = mongoose.connection;    
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', () =>{
 console.log('connected to emplrating');                      
});