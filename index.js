const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");

const express = require("express");
const app = express();
const noCache = require("nocache");

//for user route
app.use(noCache());
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

//for admin route
app.use(noCache());
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.listen(4040,function(){
    console.log("Running..http://localhost:4040/");
});
console.log("hey this is my project")
console.log("hey this is my project")
console.log("hey this is my project")