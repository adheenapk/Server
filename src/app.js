const express=require("express");
const app=express();
app.use(express.json());

/*app.get("/",(req,res)=>
{
    res.send("ok")
}
);
app.post("/",(req,res)=>
{
    console.log(req.body)
    res.send(req.body)
}
);
*/
const AuthRoute=require("./routes/auth.js");
app.use("/",AuthRoute);
app.listen(5000,()=>
{
    console.log("server listenomg at port 5000")
}
);