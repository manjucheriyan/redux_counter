import React from 'react';
import { withRouter } from 'react-router';
import {Link} from "react-router-dom"
import './App.css'
import amazon_logo from './images/amazon_logo.png';
import swal from 'sweetalert';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Navbar extends React.Component {
   
    render() {
        return ( 
        <div>
            <nav className="header" >
        
        
        <div className="header__nav">
            <Link to='' className="header__WhyEndplan">
                <div onClick="" className="header__option">
                    <span className="header__optionLineOne">Why EndPlan?</span>
                   
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to="" className="header__Security">
                <div className="header__option">
                    <span className="header__optionLineOne">Security</span>
                    
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to="" className="header__FAQ">
                <div className="header__option">
                    <span className="header__optionLineOne">FAQ</span>
                 </div>
            </Link>
        </div>

        <div className="header__nav">
            <Link to="" className="header__blog">
                <div className="header__option">
                    <span className="header__optionLineOne">Blog</span>
                 </div>
            </Link>
        </div>
        
           
        <div className="header__nav">
            <Link to="" className="header__SignIn">
                <div className="header__option">
                    <span className="header__optionLineOne">Sign Up</span>
                 </div>
            </Link>
        </div>
        
        {/* <div className="header__nav" id="PostAblogButton">
            <Link to="" className="header__CreateABlogPost">
                <div className="header__option">
                    <span className="header__optionLineOne">Post a Blog</span>
                 </div>
            </Link>
        </div> */}
        <div className="header__nav">
            <Link to="/login" className="header__login">
                <div className="header__option">
                    <span className="header__optionLineOne">SignIn</span>
                 </div>
            </Link>
        </div>
        <div className="header__nav">
            <div className="header__hello">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello {this.props.name}</span>
                 </div>
            </div>
        </div>
        
    </nav>
   
{/*     
    <div class="NavBlogContent">
        <h2>EndPlan Blog</h2>
        <p> News,Articles and insightful stories dedicated to prepare you for the end.</p>
        </div> */}

   </div>
        );
    }
}

export default withRouter(Navbar) ;




