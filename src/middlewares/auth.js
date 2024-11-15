const auth=(req,res,next)=>{
    console.log("Hello from middleware");
    let authcode="xyz";
    if(authcode==="xyz"){
        console.log("auth")
        next();
        }
        else{
            res.status(201).send("error");

        }
    


};

module.exports= {auth:auth};