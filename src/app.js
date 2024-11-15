const express=require("express");
const app=express();
let port =3500;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

const {auth}=require("./middlewares/auth.js");
app.use("/",auth);

  
 
app.get("/",(req,res)=>{

    throw new Error("Error");
    res.send("mahika");


});

app.use("/",(err,req,res,next)=>{
    res.status(500).send("something went wrong");
})