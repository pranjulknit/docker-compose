import express from "express";

const app = express();


app.get("/",(req,res)=>{
    res.json({
        message:"get"
    })
})

app.post("/",(req,res)=>{
    res.json({
        message:"post"
    })
})

app.listen(3019,()=>{
    console.log("Docker-Compose Server running on port 3019")
})