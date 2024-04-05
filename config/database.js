const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser:true,
        useUnifiedTopology:true
    })   //ye database url ko process object m feed krne ke liye dotenv library ka use krte h ok aage kaam dega 
    .then(()=>{console.log("DB connection is successful")})
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.error(error.message);
        //iska mtlb kya h ? : nodejs ke process se exit ho jao 
        process.exit(1);
    });
}


module.exports = dbConnect;