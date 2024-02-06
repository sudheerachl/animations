import React, { useState, useEffect } from "react";
import Image1 from './img/1.png';
import Image2 from './img/2.png';
import Image3 from './img/3.png';
import Image4 from './img/4.png';
import Image5 from './img/5.png';


const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [Image1,Image2, Image3, Image4, Image5];

  useEffect(() => {
    const imageScrollTimer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change images every 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearInterval(imageScrollTimer);
  }, []);

  const currentImage = images[imageIndex];
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div className="image-slider">
      <img src={currentImage} alt={`Image ${imageIndex + 1}`} style={imageStyle} />
    </div>
  );
};

export default About;
