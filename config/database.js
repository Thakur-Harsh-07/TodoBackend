const mongoose = require('mongoose');
require("dotenv").config();
const dbConnect =()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Db ka connection is successful"))
    .catch((error)=>{
        console.log("Issue in Db connection");
        console.log(error.message);
        process.exit(1);
    });
    
}
module.exports = dbConnect;