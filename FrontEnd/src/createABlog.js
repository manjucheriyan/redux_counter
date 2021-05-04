
import React from 'react';
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik';
import *as Yup from 'yup';
import amazon_logo from './images/amazon_logo.png';
import Navbar from './Navbar';
import {Link} from "react-router-dom"
import Login from './Login';
const RegisterSchema=Yup.object().shape({
    BlogTitle:Yup.string()
            .required('Required'),
    BlogDescription:Yup.string()
            .required('Required'),
    moreBlogContent:Yup.string()
            .required('Required')       
   
})
class CreateABlog extends React.Component {
  
    onSubmit =(values)=>{
            alert("hi");
            let BlogTitle=values.BlogTitle;           
            let BlogDescription=values.BlogDescription;               
            let MoreBlogContent=values.moreBlogContent;
           
            let BlogImage="https://images.unsplash.com/photo-1618901035660-30fa75682aee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        console.log("inside createblog.js"+BlogTitle+BlogDescription+MoreBlogContent+BlogImage);
FrontEndController.CreateNewBlog(BlogTitle,BlogDescription,BlogImage,MoreBlogContent)
            .then(response=>{
                swal("Blog added successfully",response.data.message,"success")
                this.props.history.push({
                    pathname:"/"
                    });
            })
            .catch(error=>{
                console.log(error)
                swal("Blog addition Failed","error");
            })}



    render() {
        return (
<div >


<Formik
initialValues={{
    BlogTitle:"",
    BlogDescription:"",
    moreBlogContent:""

}}
validationSchema={RegisterSchema}
onSubmit={this.onSubmit}
>

{({errors,touched})=>(
<Form>
<div >
<Link to="/">Logout</Link>
<h2>Helloo Admin, You can post your blog here</h2>
   <div className="heading-createABlog"><span><h4>Create Your Blog</h4></span></div>

<div className="form-group">
    <div className="field_Blogtitle"><small><b><span>Title</span></b></small></div>
   <div >
   <Field className="field_Blogtitle" name="BlogTitle" type="text"/>
    {errors.BlogTitle?<div>{errors.BlogTitle}</div>:null}
   </div>


<div className="form-group">
    <div className="field_Blogdescription"><small><b><span>Blog Description</span></b></small></div>
   <div >
   <Field className="field_Blogdescription" name="BlogDescription" type="text"/>
    {errors.BlogDescription?<div>{errors.BlogDescription}</div>:null}
   </div>

   
</div>

<div className="form-group">
<div className="moreBlogContent"><small><b><span>More Blog Content</span></b></small></div>
<div >
   <Field className="field_moreBlogContent" name="moreBlogContent" type="text"/>
    {errors.moreBlogContent?<div>{errors.moreBlogContent}</div>:null}</div>
</div>


<div className="form-group">
<button type="submit" className="btn btn-success">Confirm your Blogg</button>
</div>



</div></div>
</Form>
)}
</Formik>

<div className="col-4"></div>
</div>


);
}
}export default withRouter(CreateABlog) ;