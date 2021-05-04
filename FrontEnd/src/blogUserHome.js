import React from 'react';
import { withRouter } from 'react-router';
import './Home.css';
import Navbar from './Navbar';
import FrontEndController from './FrontEndController';
import BlogStylingController from './BlogStylingController';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
class BlogUserHome extends React.Component { 
    state ={
        Blogs:[], 
        userObj:this.props.location.userObj,
    //    userID:"manju"
    }
 
    componentDidMount(){
        console.log(this.state.userObj.userID+"login user passed")
        this.getAllBlogs();
         
    }
   

    getAllBlogs(){
        FrontEndController.getAllBlogs()
        .then(data=>{
            this.setState({
                Blogs:data.data.Blogs
                
            });
        });
        console.log("blogUserHome.js");
        console.log(this.state.userObj);
    }
 
    render() {
        return ( 
        <div>  
                 
               
       
      <Navbar name={this.state.userObj.userID}/>
      <div class="NavBlogContent">
        <h2>EndPlan Blog</h2>
        <p> News,Articles and insightful stories dedicated to prepare you for the end.</p>
    </div> 
                         
    <div className="col-sm-8"> 
<Grid container id="grid-container">
{
this.state.Blogs.map(blogObject=>
     <Grid item xl={3}>
        <BlogStylingController  BlogObject={blogObject} BlogTitle={blogObject.BlogTitle}
         BlogDetails={blogObject.BlogDescription} userID={this.state.userObj.userID}
          userObj={this.state.userObj} 
          />                
          </Grid>      
               
)
}  
</Grid>
</div>


     
  </div>

        );
    }
}

export default withRouter(BlogUserHome) ;




