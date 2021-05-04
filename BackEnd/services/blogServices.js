
const {Blogs}= require("../models/blogModel");


function createNewBlog(BlogTitle,BlogDescription,BlogImage,MoreBlogContent){
    console.log("BlogServices - createNewBlog");
    console.log(BlogTitle+BlogDescription+BlogImage+MoreBlogContent)
    
    var dt = new Date();
    var BlogId = dt.getDate()+""+dt.getMonth()+""+dt.getFullYear()+""+dt.getMinutes()+""+dt.getSeconds()+""+dt.getMilliseconds;
    return Blogs.findOne({
        BlogTitle
    })
    .then (obj=>{
        if(obj){
            return{
                statusCode:400,
                message:"Blog on this topic  already exists"
            }
        }
        const newBlog= new Blogs({
            BlogId,BlogTitle,BlogDescription,BlogImage,MoreBlogContent
        });
        newBlog.save();

        return {
            statusCode:200,
            message:"Blog created successfully",
            
            
        }
    })
    //data[username]={username,password,acno,history:[],balance:0};
}

function UpdateColumn (blogIdForUpdation,newBlogTitle,newBlogDescription,newMoreBlogContent){   
    
    console.log('UpdateColumn in controller.js.........................')

   // let newValueForBlogTitle=ColumnNewValue;
    //let currentBlogTitle =ColumnOldValue;
    console.log(blogIdForUpdation+newBlogTitle+newBlogDescription+newMoreBlogContent);
    return Blogs.updateOne( { BlogId :blogIdForUpdation },{
        $set: {
            BlogTitle: newBlogTitle,
            BlogDescription:newBlogDescription,
            MoreBlogContent:newMoreBlogContent
            
        }
    } )
    .then (obj=>{
        if(obj){
            return{ 
                statusCode:200,
                message:"updated in successfully",
            }
        }
        return {
            statusCode:400,
            message:"Invalid credentialss1"
        }
    })
   
}

function getAllBlogs(){
    console.log("in service-blog");
    return Blogs.find({}) 
    .then (Blogs=>{
            return{
                statusCode:200,
                Blogs:Blogs
            }
    })
}






module.exports={
  
    createNewBlog:createNewBlog,
    getAllBlogs:getAllBlogs,
    UpdateColumn:UpdateColumn
    }