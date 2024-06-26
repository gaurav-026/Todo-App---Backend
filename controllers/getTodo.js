//import the model
const { response } = require('express');
const Todo = require('../models/Todo');



exports.getTodo = async(req, res)=>{
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo data is fetced"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error: err.message,
            message: "Server Error"
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //extract todo item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        
        //if id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"NO Data found with given id"
            })
        }

        //if id found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data is successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error: err.message,
            message: "Server Error",
        })
    }
}