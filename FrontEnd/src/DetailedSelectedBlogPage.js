
import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import FrontEndController from './FrontEndController';
//import './DetailedSelectedBlogPage.css';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import StylingDetailedSelectedBlogPage from './StylingDetailedSelectedBlogPage';

class DetailedSelectedBlogPage extends React.Component {
  
    state = {
        
        BlogObject:this.props.location.BlogObject,
        userID:this.props.location.userID,
        userObj:this.props.location.userObj
      }
  
      addToFavourites=()=>{
        let FavouritedBlog=this.state.BlogObject.BlogId;
        console.log(FavouritedBlog);
        FrontEndController.addToFavourites(BlogId)
          .then(response=>{
            swal("Blog edited successfully",response.data.message,"success")
            this.props.history.push({
                pathname:"/"

                });
        })
        .catch(error=>{
            console.log(error)
            swal("Blog edit Failed","error");
        })
        }
        
      

    
    render() {
        return (             
        <div>
        <Navbar   name={this.state.userObj.userID} />
        <button onClick={this.addToFavourites}>Add to favourites</button>
       <StylingDetailedSelectedBlogPage BlogObject={this.state.BlogObject } 
       BlogTitle= {this.state.BlogObject.BlogTitle} 
       BlogDescription={this.state.BlogObject.BlogDescription}
       BlogImage={this.state.BlogObject.BlogImage} 
       MoreBlogContent={this.state.BlogObject.MoreBlogContent} 
       userID ={this.state.userID} userObj={this.state.userObj}
       />
       
 </div>
 );
}
}
export default withRouter(DetailedSelectedBlogPage) ;


