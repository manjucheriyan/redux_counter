
import React from "react";
import {Link} from "react-router-dom";



function BlogstylingController({ BlogObject,userID,userObj}) {
 
  return (
    <div className="StyleBlog">
      <div className="StyleBlog__info">
       <Link to={{ 
                   pathname: "/DetailedSelectedBlogPage",
                   BlogObject:BlogObject,
                   userObj:userObj,
                   userID:userID
                    }}>
        <img src={BlogObject.BlogImage} alt='images' 
        width="200" height="200" />
        <h3 className="Blog__title">
         <strong>{BlogObject.BlogTitle}</strong>
        </h3>
        <p className="Blog__Details">
         {BlogObject.BlogDescription}
        </p>
        </Link>
        
      
     

    </div></div>
  );
}

export default BlogstylingController;