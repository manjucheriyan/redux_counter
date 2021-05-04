 

import React from 'react'; 
import swal from 'sweetalert'; 
import FrontEndController from './FrontEndController';  
import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik'; 
import *as Yup from 'yup';  
import Navbar from './Navbar';
const RegisterSchema=Yup.object().shape({ 

        userID:Yup.string()   .required('Required'), 
        password:Yup.string()   .required('Required'), 


}) 

  

class Register extends React.Component { 

     

constructor() { 

    super(); 

    this.state={ 

        userID:"", 
        password:""
     } 

  

    this.handleChange = this.handleChange.bind(this); 

    this.onSubmitButton = this.onSubmitButton.bind(this); 

   // this.onChange = this.onChange.bind(this); 

     

  } 
  handleChange(e) { 

    let target = e.target; 

    let value = target.type === "checkbox" ? target.checked : target.value; 

    let name = target.name; 

    this.setState({ 

      [name]: value 

    }); 
    

  } 

  

    onSubmitButton(){ 

            let userID=this.state.userID;
             
            let password=this.state.password;
            alert(userID+password)
            FrontEndController.registration(userID,password) 

            .then(response=>{ 

                swal("Registration success",response.data.message,"success") 

                this.props.history.push("/"); 

            }) 

            .catch(error=>{ 

                console.log(error) 

                alert(error) 

                swal("Registration Failed","u provided invalid message","error"); 

            })} 

         

  

  

  

    render() { 

        return ( 

            <div className="container-flex"> 
<Navbar/>
  

                       <Formik 

                        initialValues={{ 

                                userID:"", 
                                password:""
 

                       }} 

                       validationSchema={RegisterSchema} 

                       onSubmit={this.onSubmitButton}   > 

  

                       {({errors,touched})=>( 

                       <Form> 

                            <div className="jumbotron" > 

                            <h2>Register Here!!</h2><br/><br/> 

        <div className="form-group"> 

                <label for="userID"><b class="badge badge-secondary">user ID</b></label> 

                <Field type="text" name="userID" value={this.state.userID} onChange={this.handleChange}/> 

                {errors.userID?<div>{errors.userID}</div>:null} 

        </div> 

        <div className="form-group"> 

                <label for="password"><b class="badge badge-secondary">Password</b></label> 

                <Field type="text" name="password" value={this.state.password} onChange={this.handleChange}/> 

                {errors.password?<div>{errors.password}</div>:null} 

        </div> 

                                <div className="form-group"> 

                                    <button type="submit" className="btn btn-success" onClick={this.onSubmitButton}>Register</button> 

                                </div> 

                            </div> 

                     </Form> 

                     )} 

                    </Formik> 

                    </div>       

                

             

        ); 

    } 

}export default withRouter(Register) ; 