
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const  PORT =  process.env.PORT || 4000;

//middleware ki need pdegi to   
app.use(express.json());

// import routes for Todo API 
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);


//start serwer
app.listen(PORT, ()=>{
    console.log(`Server started successfully at ${PORT}`);
})


//CONNECT TO DB
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res)=>{
    res.send(`This is home page `)
})