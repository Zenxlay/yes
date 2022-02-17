require("dotenv").config();

const express = require("express");
const { DataTypes } =  require("sequelize")
const app = express()
const sequelize = require("./models/index").sequelize
const  User = require("./models/user")

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.get("/get_route", (req, res) => {

//     res.status(300).json({message: "Halo dari server"})
// })

// app.post("/create_route", (req, res) => {
    
//     res.status(300).json({message: "Dibuat dari server"})
// })

// app.post("/create_user", async (req, res) => {
//     const data = await User(sequelize, DataTypes).create(req.body)
//     return res.status(201).json({message: "success created user", data: data})
// })

app.get("/get_user", async (req, res) => {
    const data = await User(sequelize, DataTypes).findAll()
    return res.status(201).json({message: "success get all user", data: data})
})

app.listen(port, console.log("listening at" + port))