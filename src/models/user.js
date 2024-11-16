const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({

    firstName:{
        type:"String"
    },
    lastName:{
        type:"String"
    },
    emailId:{
         type:"String"


    },
    gender:{
        type:"String"
    },
    password:{
        type:"String"
    },
    age:{
        type:"Number"
    }});

   const User= mongoose.model("user",userSchema);

   module.exports=User;