import React from 'react';
import "./Socials.css";
import { FaTripadvisor, FaFacebookF, FaInstagram} from "react-icons/fa";
import {IconContext } from 'react-icons';

function Socials() {
    return (

      <IconContext.Provider value={{ color: '#242323', size: '2rem'}}>
        <div className="sticky-sidebar">
       <a href="https://www.tripadvisor.com/m" target={"_blank"} rel="noreferrer">
        <FaTripadvisor icon={FaTripadvisor} />      
     </a>  
     <a href="https://www.facebook.com/wix" target={"_blank"} rel="noreferrer">
        <FaFacebookF icon={FaFacebookF} />      
     </a> 
     <a href="https://www.instagram.com/wix/" target={"_blank"} rel="noreferrer">
        <FaInstagram icon={FaInstagram} />      
     </a> 
      </div>
      </IconContext.Provider>
    )
}
export default Socials;
