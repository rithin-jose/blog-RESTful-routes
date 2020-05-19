var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// App config
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

mongoose.connect("mongodb://localhost/blog",{useNewUrlParser: true, useUnifiedTopology: true});

// mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    image: String,
    created: {type:Date,default:Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);

// Blog.create({
//     title: "Test",
//     body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, illo. Doloremque quas eos, sed velit et ipsum animi, officia suscipit totam iste quisquam aliquam nemo architecto! Corporis perferendis beatae consectetur.",
//     image:"https://rithinjose.tech/images/prof.jpg"
// });

//RESTful Routes

app.get("/",function(req,res){
    res.redirect("/blogs");
});

// Index route
app.get("/blogs",function(req,res){
    Blog.find({},function(err,blogs){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{blogs:blogs});            
        }
    });
});

// New route
app.get("/new",function(req,res){
    res.render("new");
});

// Create route
app.post("/blogs",function(req,res){
    Blog.create(req.body.blog,function(err, newBlog){
        if(err){
            res.render("new");
        }
        else{
            res.redirect("/blogs")
        }
    });
});

// Show route
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id,function(err, foundBlog){
        if(err){
            res.redirect("/blogs")
        }
        else{
            res.render("show",{blog:foundBlog})
        }
    });
});

//Handeling 404 error
app.get("*",function(req,res){
    res.send("404 Not found");
});

//Port configuration
app.listen(3000,function(){
    console.log("Server listening on port 3000");
});