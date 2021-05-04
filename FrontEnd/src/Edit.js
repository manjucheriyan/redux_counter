
import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import FrontEndController from './FrontEndController';
//import './DetailedSelectedBlogPage.css';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import StylingDetailedSelectedBlogPage from './StylingDetailedSelectedBlogPage';

class EditBlogPage extends React.Component {

      state = {
        currentBlogObject:"",
        newBlogTitle:"",
        newMoreBlogContent:"",
        newBlogDescription:""

      }

      constructor(props) { 
          super(props);         
        }

        componentDidMount(){
          this.setState({currentBlogObject:this.props.location.BlogObjecttoBeEdited})
          this.handleChange = this.handleChange.bind(this); 
          this.editBlog = this.editBlog.bind(this); 
          
          //this.InputOnChange = this.InputOnChange.bind(this);
        }

      handleChange(e) {
        console.log("handleCHange") 
         let target = e.target;         
        let value = target.type === "checkbox" ? target.checked : target.value; 
        let name = target.name; 
        this.setState({ 
        [name]: value 
       
        });
        console.log(name+value) ;
      } 

 
  editBlog=()=>{
    console.log("edit.js")
   let blogIdForUpdation =this.state.currentBlogObject.BlogId;
   let newBlogTitle =this.state.newBlogTitle;
   let newBlogDescription =this.state.newBlogDescription;
   let newMoreBlogContent =this.state.newMoreBlogContent;

   if(newBlogTitle===""){
    newBlogTitle =this.state.currentBlogObject.BlogTitle;
  }

   if(newBlogDescription===""){
    newBlogDescription =this.state.currentBlogObject.BlogDescription;
   }

   if(newMoreBlogContent===""){
    newMoreBlogContent =this.state.currentBlogObject.MoreBlogContent;
  }
    console.log(blogIdForUpdation+"__"+newBlogTitle+"__"+newBlogDescription+"__"+newMoreBlogContent)
   FrontEndController.updateBlog(blogIdForUpdation,newBlogTitle,newBlogDescription,newMoreBlogContent)
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
        <Navbar    />
        <table class="table" id="tableEdit">
     
                <tr>
                    <th>Blog Title</th>
                    
                    <td>{this.state.currentBlogObject.BlogTitle}</td>
                    <td><input type="text" name="newBlogTitle" value={this.state.newBlogTitle} onChange={this.handleChange}/></td>
                    <td >
                      </td>
                      
                </tr>                
                    <tr>
                           
                    <th>More Blog Content</th>
                    <td>{this.state.currentBlogObject.MoreBlogContent}</td>
                    <td><input type="text" name="newMoreBlogContent" value={this.state.newMoreBlogContent} onChange={this.handleChange}/></td>
                    <td ></td>     
                            
                </tr>
                <tr>
                           
                           <th>Blog Description</th>
                           <td>{this.state.currentBlogObject.BlogDescription}</td>
                            <td><input type="text" name="newBlogDescription" value={this.state.newBlogDescription} onChange={this.handleChange}/></td>
                           <td ></td>     
                                   
                       </tr>
                       <button name="BlogTitle" 
                      onClick={this.editBlog}>Edit</button>
            </table>           
                 
 </div>
 
 );
}
}
export default withRouter(EditBlogPage) ;




