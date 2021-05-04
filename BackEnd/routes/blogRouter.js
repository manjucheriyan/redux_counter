var express = require('express');
var router = express.Router();
var blogServices = require('../services/blogServices');


function authMiddleware(req,res,next){
  console.log("Inside authMiddleware");
  if(req.session.currentUser){
    next();
  }
  else{    
    res.staus(401).send({message:"Please login"});
  }
}
/* GET users listing. */

router.post('/createBlog',function(req,res){
  console.log("BlogRouter-createBlog"); 
  
  //console.log(blogTitle+blogDescription+BlogImage+MoreBlogContent);
 let BlogTitle=req.body.BlogTitle;
 let BlogDescription=req.body.BlogDescription;
 let BlogImage=req.body.BlogImage;
 let MoreBlogContent=req.body.MoreBlogContent;
 console.log(BlogImage+MoreBlogContent+BlogTitle+BlogDescription);
 
 blogServices.createNewBlog(BlogTitle,BlogDescription,BlogImage,MoreBlogContent)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,blogs:data.Blogs});
  }) 
})
router.put('/updateBlogs',function(req,res){
  console.log("In update -router");
 
  let blogIdForUpdation=req.body.blogIdForUpdation;
  let newBlogTitle=req.body.newBlogTitle;
  let newBlogDescription=req.body.newBlogDescription;
  let newMoreBlogContent=req.body.newMoreBlogContent;

 console.log(blogIdForUpdation+newBlogTitle+newBlogDescription+newMoreBlogContent)
  
  blogServices.UpdateColumn(blogIdForUpdation,newBlogTitle,newBlogDescription,newMoreBlogContent)
    .then(data=>{
      console.log(data)
      res.status(data.statusCode).send({message:data.message});
    })
    .catch(function(error){ 
      console.log(error); 
      res.status(data.statusCode).send({message:"User Updation Failed msg from router"});
    });
});
router.get('/getAllBlogs', function(req, res) {
  console.log("Router - getAllBlogs"); 
 // let productCategory=req.body.productCategory;
  blogServices.getAllBlogs()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,Blogs:data.Blogs});
  });
});




module.exports = router;