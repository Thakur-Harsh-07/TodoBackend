const express = require('express');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO api

const todoRoutes = require('./routes/todos');

// mount the todo apis routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT,()=>{
    console.log(`Server Started successfully at ${PORT}`);
})

// connect to the database

const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/",(req,res)=>{
    res.send(`<h1> This is Homepage Baby</h1>`);
})