import axios from 'axios';
const baseUrl = "http://localhost:4000";

class FrontEndController{
  

    static getAllBlogs(){
      //  alert("Inside FrontEndController");
        return axios.get(baseUrl+"/blog/getAllBlogs",{withCredentials:true }
        )
    }
    
    
    static  CreateNewBlog(BlogTitle,BlogDescription,BlogImage,MoreBlogContent){
        console.log("Inside FrontEndController-creatNewBlog");
        console.log(BlogTitle+BlogDescription+BlogImage+MoreBlogContent);
        //alert(blogTitle+blogDescription+moreBlogContent+blogImage);
        return axios.post(baseUrl+"/blog/createBlog",{
            BlogTitle,BlogDescription,BlogImage,MoreBlogContent
        })
    }
   
    static  updateBlog(blogIdForUpdation,newBlogTitle,newBlogDescription,newMoreBlogContent){
        console.log("Inside FrontEndController-editBlog");
        console.log(blogIdForUpdation+"__"+newBlogTitle+"__"+newBlogDescription+"__"+newMoreBlogContent);
        return axios.put(baseUrl+"/blog/updateBlogs",{
            blogIdForUpdation,newBlogTitle,newBlogDescription,newMoreBlogContent
        })
    }
    static login(userID,password){ 
        console.log("Inside FrontEndController-login");
        //alert(userID+password);      
        return axios.post(baseUrl+"/users/login",{
            userID,
            password
        }, { withCredentials:true })
    }
    static registration(userID,password){
        return axios.post(baseUrl+"/users/register",{
            userID,
            password,
        })
    }
}

export default FrontEndController;