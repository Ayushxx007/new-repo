const mongoose=require("mongoose");
const validator=require("validator");

const userSchema= new mongoose.Schema({

    firstName:{
        type:String,
        uppercase:true,
        required:true,
        minlength:3
      
    },
    lastName:{
        type:String
    },
    emailId:{
       
         type:String,
         required:true,
         unique:true,
         validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email");

         }}
         

      
},
    gender:{
        type:String,
        validate(value){
            if(!["male","Female","others"].includes(value)){
                throw new Error("Invalid gender");}}
        
    },
    password:{
        type:String,
        required:true
    },

    age:{
        type:Number
    },

    skills:{
        type:[String],
        unique:true,
        default: 5

    }
},{timestamps:true});

   const User= mongoose.model("user",userSchema);

   module.exports=User;