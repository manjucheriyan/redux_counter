import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import ProductController from './ProductController';
import ProductstylingController1 from './ProductstylingController1'

class UserHomeCopy extends React.Component {
  
    state = {
        selectValue: "NA",
        productNames:"",
        productPrice:"",
        productCategory:"",
        productCount:"",
        productsArray:[],
        userObj:this.props.location.userObj,
        selectedProductCategory: "" 
    }

    callbackFunction = (childData) => {
    this.setState({productsArray: childData})
    }
    
    render() {
        return (             
            <div>
                <Navbar name={this.state.userObj.Name} productCountInCart ={""}  parentCallback = {this.callbackFunction}/>
                <div><h1>Hello {this.state.userObj.Name}</h1></div>            
                <div className="home__row"> 
                    {
                        this.state.productsArray.map(product=>
                            <div>
                                <ProductstylingController1 userObj ={this.state.userObj} productObj={product}/>                
                            </div>                
                        )
                    }         
                </div>
            </div>   
        );
    }
}

export default withRouter(UserHomeCopy) ;




