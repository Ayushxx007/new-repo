const mongoose=require("mongoose");

const connectDB=async function(){

    await mongoose.connect("mongodb+srv://ayushkumawat77889:B8xFdwJTzOlwh3iY@ayush.kq1ew.mongodb.net/practicedb");
}


module.exports=connectDB;



