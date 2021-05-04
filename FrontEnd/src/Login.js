import React from 'react';
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
import Navbar from './Navbar';
import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik';
import *as Yup from 'yup';
import {Link} from "react-router-dom"


const LoginSchema=Yup.object().shape({
    userID:Yup.string()
             .required('Required'),
     password:Yup.string()
             .required('Required')
    
})
class Login extends React.Component {
  register=()=>{
    this.props.history.push("/register");
  }
    onSubmit =(values)=>{           
            let userID=values.userID;    
            let password=values.password; 
            alert(userID+password);       
            FrontEndController.login(userID,password)
            .then(response=>{
                let name = response.data.record.userID
               console.log(name+"you are")
                if(name=="admin"){
                    this.props.history.push({
                          pathname:"/blogAdminHome",
                           userObj:response.data.record,
                           message:response.data.message
                           });
                           console.log(response.data.message);
                        //  swal(this.state.message); 
                }  
                else{
                    this.props.history.push({
                        pathname:"/blogUserHome",
                         userObj:response.data.record,
                        });
                        console.log(response.data.message);
                 // swal("Login failed");
                    //swal("Please register your UserId");
                    
                }  
               
                //swal("login success",response.data.message,"success")
                /*this.props.history.push({
             //   pathname:"/userHome",
                userObj:response.data.record,
                });*/
            })
            .catch(error=>{
                console.log(error)
                swal("login failed","u provided invalid message","error");
            })}



    render() {
return (
    <div>
    <Navbar  name={""} productCountInCart ={""}/>
<div className="container">

<div className="row">
<div className="col-4"></div>
<div className="col-4">

<Formik
initialValues={{
    userID:"",
    password:""
    
}}
validationSchema={LoginSchema}
onSubmit={this.onSubmit}
>
{({errors,touched})=>(
<Form>
<div className="jumbotron" >
<h3>Sign-In</h3>
<div className="form-group1">
    <label for="exampleInputUserId"><span className="loginLabel_username">User ID</span>
    </label>
    <Field name="userID" />{errors.userID?<div>{errors.userID}</div>:null}
</div>
<div className="form-group">
    <label for="exampleInputPassword"><span className="loginLabel_password">Password</span>
    </label>
    <Field name="password" />{errors.password?<div>{errors.password}</div>:null}
</div>
<div className="form-group">
    <button type="submit" className="btn btn-primary">Continue</button>
</div>


</div>

</Form>
)}
</Formik>
<div className="form-group">
 <button type="submit" id="button-register" className="btn btn-primary" onClick={this.register}>Please register here</button>
</div>
<div className="col-4"></div>
</div>
</div>
</div>  
</div>          
);
    }
}

export default withRouter(Login) ;