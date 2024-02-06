import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
 FcVoicePresentation,
 FcInspection,
 FcApproval,
 FcDataProtection,
} from "react-icons/fc";
import "./largecard.css";

const LargeCard = (props) => {
 const { loadContent } = props; // Access prop using destructuring

 return (
   <div className="flex gap-10">
     {/* Right */}
     <p id="about">
       <Link to="/about" onClick={loadContent}>About Us</Link>
     </p>
   </div>
 );
};

export default LargeCard;
