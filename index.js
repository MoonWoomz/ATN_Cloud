require('dotenv').config();
const express = require('express');
const path = require('path');
const toy_products = require('./Models/Toy_products');
const mongoose = require('mongoose');
const Toy_products = require('./Models/Toy_products');




const app = express();
const port = process.env.PORT || "8080";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("view", {title: "Home"});
});
app.get("/Home", (req, res) => {
    res.send("Hello");
});

app.get('/toy_products', async(req, res) => {
    try {
        const toy_products = await Toy_products.find(({}));
        res.status(200).json(toy_products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app. get('/toy_products:id', async(req, res) => {
    try {
        const {id} = req.params;
        const toy_products = await Toy_products.findById();
        res.status(200).json(toy_products);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})
app.get('/toy_products',  async (req, res) => {
    try {
        await Toy_products.insertMany ([
            {
                name: "teddy",
                category: "stuff animal",
                price: "$20",
                quantity: "35",
                image:"",
            }            
        ])
        const toy_products = await Toy_products.create(req.body)
        res.status(200).json(toy_products);
    } catch (error) {
        console.log("err" + error);
        res.status(500).json({message: error.message});
        console.log(req.body);
    req.send(req.body);
    }
})


app.put('toy_products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const toy_products = await Toy_products.findByIdAndUpdate(id, req.body);
        if(!toy_products){
            return res.status(404).json({message: `cannot find product with ID ${id} `})
        }
        res.status(200).json(toy_products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('toy_products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const toy_products = await Toy_products.findByIdAndRemove(id, req.body);
        if(!toy_products){
            return res.status(404).json({message: `cannot find product with ID ${id} `})
        }
        res.status(200).json(toy_products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.listen(port, () => {
    console.log(`Listen on ${port}`)});

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Norr:Nam061203@atn.rwjf7cp.mongodb.net/Toyproducts_db').then(() => {
    console.log('connect to mongodb')
}).catch((error) => {
    console.log(error)
})