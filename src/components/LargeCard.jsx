import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcVoicePresentation, FcInspection,FcApproval,FcDataProtection } from "react-icons/fc";
import "./largecard.css";
const LargeCard = (props) => {
  const loadcontent = props.load;
  
  return (
   
      {/* Right  */}
      <div className="flex gap-10">
       <p id="about" >
          <Link to="/about" onClick={loadcontent}>About Us</Link>
        </p>
        
        </div>
  );
};

export default LargeCard;
