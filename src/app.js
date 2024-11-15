const express=require("express");
const app=express();
let port =3500;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})


app.use("/",(req,res)=>{
    res.send("ganduka");
});


app.use("/mahika",(req,res)=>{
    res.send("mahika");
});
