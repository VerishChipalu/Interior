require("./model/index")
const express = require("express")
const app = express()
app.set('view engine','ejs')





app.get("/home",(req,res)=>{
    res.render("home.ejs")
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

app.get("/register",(req,res)=>{
    res.render("register.ejs")
})

app.get("/create page",(req,res)=>{
    res.render("createpage.ejs")
})

app.listen(3000,()=>{
    console.log("project has started")
})