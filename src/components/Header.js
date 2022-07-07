import React from "react";
import './Header.css'
export default ({black}) =>{
    console.log(black);
    return(
        <div>
            <header  className= {black? "black" : ''}>
            <img src="../../netflix_logo.png" className="imgLogo"></img>
            <img src="../../user_netflix.jpg" className="imgUser"></img>
            </header>
            
        </div>
    );
}