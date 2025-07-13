const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log('Database Connected Sucessfully');
  }
   
  catch (error) {
    console.log('Failed To connect Database',error);
    
  }
};
module.exports=connectDB
