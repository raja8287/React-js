import React from "react";
import { useState } from "react";
//import ct from "./nambagur";
import {Link,Route,Routes} from "react-router-dom";



const Nvbr=()=>{
   
    
    return (  
      <div className="container">     
       <Link to="about">ABOUT</Link>
       <Link to="login">LOGIN</Link>
       <Link to="friends list">FRIENDS LIST </Link>
     
          <div className="Search_bar">
          <input placeholder="Search"/>
          <button type="submit" className="s-btn">Search</button>
      
          </div>
      
      </div>  
    
    
 
    
    );  
  }  
       

     
 export default Nvbr;
