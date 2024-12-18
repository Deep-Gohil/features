const express = require("express")
const dotenv = require("dotenv").config();

const cors = require("cors");
const postRouter = require("./routes/post.router");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())


app.get("/",(req,res)=>{
    res.json({msg:"Testing..."})
})

app.use("/post",postRouter);

app.listen(8090,()=>{
    console.log("listening on Port 8090");
    
})