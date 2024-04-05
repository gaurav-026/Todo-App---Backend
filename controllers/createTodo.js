//import the model
const Todo = require("../models/Todo");

//define routes handler


//basically mughe todo se title aur description lena h aur db m insert krana h 
exports.createTodo = async(req, res) =>{
    try{
        //extract title and description from requrest body
        const {title,description} = req.body;
        //create a new Todo obj and insert in db
        const response = await Todo.create({title, description}); 
        //send json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entery Created Successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data:"Internal Server error",
            message : err.message,
        })
    }
}