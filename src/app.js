const express=require("express");
const app=express();
let port =3500;

app.use(express.json());

const connectDB=require("./config/database.js");
const User=require("./models/user.js");

connectDB().then(()=>{
    console.log("connected to db");
    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    });
}).catch((err)=>{
    console.log(err);
});


app.post("/signup",async (req,res)=>{

    const user=new User(req.body);
    // creating new instance of user model
    try{
    await user.save();
    res.send("user added successfully");
   }catch(err){
    res.send("problem adding");

   }
});

// getting users by its id
app.get("/user",async(req,res)=>{
    const email=req.body.emailId;
try{
    const user=  await User.find({emailId:email});
    if(user.length===0){
        res.send("user not found");
    }else{
    res.send(user);
    }
}
catch(err){
    res.send(err);
}
  
});


//getting all users
app.get("/feed",async (req,res)=>{

    try{
        const user = await User.find({});
        res.send(user);


    }catch(err){
        res.send(err);

}
   
});


app.delete("/user",async (req,res)=>{
    const id =req.body._id;

    try{
        const user = await User.findByIdAndDelete({_id:id});
        res.send(`${user} deleted`);


    }catch(err){
        res.send(err);

}
   
});


app.patch("/user",async (req,res)=>{
    const id =req.body._id;
    const body=req.body;

    try{
        const user = await User.findByIdAndUpdate({_id:id},req.body);
        res.send(`${user} updated`);


    }catch(err){
        res.send(err);

}
   
});








