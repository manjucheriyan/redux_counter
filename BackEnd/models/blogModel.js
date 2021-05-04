const mongoose = require('mongoose');

const Blogs = mongoose.model('Blogs',{
    BlogId:String,
    BlogTitle:String,
    BlogDescription:String,
    BlogImage:String ,
    MoreBlogContent:String   
})

module.exports ={
    Blogs
}
