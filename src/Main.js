import React from "react";
import Hours from "./components/Hours";
import LargeCard from "./components/LargeCard";
import Address from "./components/Address";
import "./components/faq.css";
import { Helmet } from "react-helmet";
function Main(props) {
  return (
    <>
 <Helmet>
        <title>CLICK</title>
      </Helmet>
      <LargeCard load={props.load}/>
     
      
    </>
  );
}

export default Main;
