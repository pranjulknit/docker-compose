import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

    const prismaClient = new PrismaClient();

app.get("/",async (req,res)=>{
    const data = await prismaClient.user.findMany();
    console.log(data)

    res.json({
        data
    })
})

app.post("/",async(req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
      
    });

    res.json({
        message:"post"
    })
})

app.listen(3019,()=>{
    console.log("Docker-Compose Server running on port 3019")
})