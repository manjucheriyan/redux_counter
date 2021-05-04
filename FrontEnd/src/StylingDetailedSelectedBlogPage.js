
import React from "react";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';


function StylingDetailedSelectedBlogPage({ BlogObject,BlogTitle,userID,userObj}) {

 const BlogObjectTitleConstant={BlogTitle}
 console.log("StylingDetailedSelectedBlogPage");
 console.log(BlogObjectTitleConstant);
 console.log(BlogObject)
 let disableFlag=true;
 console.log(userID);
 if(userID=="admin"){
  disableFlag=false;
 }

  return (
    <div className="StyleSelectedBlog" >
      <div className="StyleSelectedBlog__info">
        
     <img src={BlogObject.BlogImage} alt='images' 
        width="200" height="200" />
        
         
     
     <h1 className="SelectedBlog__title">
         <strong>{BlogObject.BlogTitle}</strong>
         </h1>
        
          

   <p className="SelectedBlog__Details">
         {BlogObject.BlogDescription}
        </p>
        
       
        <p className="SelectedBlog__MoreContent">
         {BlogObject.MoreBlogContent}
        </p>
       
       
        <Link to={{ pathname: "/editBlog",
                   BlogTitletoBeEdited:BlogObjectTitleConstant ,
                   BlogObjecttoBeEdited:BlogObject

                       }}><button disabled={disableFlag}>Edit Blog</button></Link>
     
    </div></div>
  );
}

export default StylingDetailedSelectedBlogPage;