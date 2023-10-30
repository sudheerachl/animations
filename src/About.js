import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [activeSection, setActiveSection] = useState("history");
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(
    "../img/1.jpg",
    "../img/2.jpg",
    "../img/3.jpg",
    "../img/4.jpg",
    "../img/5.jpg",
  );

  const sections = {
    history: {
      title: "About DR.Jiddu Sai Akhila",
      text: `Dr. Jiddu Sai Akhila is a passionate practitioner of alternative medicine- Homoeopathy who pursued her B.H.M.S (Bachelor of Homoeopathic Medicine and Surgery) from Father Muller Homoeopathic Medical College in Karnataka, India. She is a college topper who secured first rank in the first three years and second rank in the final year with distinctions twice in medical school. A believer in active participation she has taken part in various academic, research, and co-curricular activities in college and within homeopathic fraternity. She is the Presidential Gold Medal Awardee batch 2017-23 and receiver of the Gold scholarship under The Mukesh Batra Academic Excellence Awards. She is an alumnus of The PSBB Millennium School, OMR, Chennai, India. She has been an All- rounder and Academic achiever in school. She has successfully completed two research papers with positive results on rimary insomnia and constitutional survey study which have been published in acclaimed Homoeopathic journals. She has attended and participated in various online and offline conferences and C Es across the country.`,
    },
    effectiveness: {
      title: "Effectiveness of Homeopathy",
      text: null, // No text for this section
    },
    accomplishments: {
      title : "Homoeopathy Myths and Facts: Busted!",
      text: null,
    },
  };
  let imageScrollTimer = null;
  const setImageScrollTimer = (timer) => {
    imageScrollTimer = timer;
  };
  const startImageScrolling = () => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change images every 5 seconds

    // Save the timer ID to be able to clear it later
    setImageScrollTimer(timer);
  };
  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "effectiveness") {
      // Start the image scrolling timer
      startImageScrolling();
    } else {
      // Stop the image scrolling timer when switching to other sections
      stopImageScrolling();
    }
  };



  const stopImageScrolling = () => {
    if (imageScrollTimer) {
      clearInterval(imageScrollTimer);
    }
  };

  useEffect(() => {
    // Clean up the timer when the component unmounts
    return () => {
      stopImageScrolling();
    };
  }, []);

  const renderSections = () => {
    return Object.keys(sections).map((section) => {
      const isActive = section === activeSection;
      return (
        <button
          key={section}
          className={`section-button ${isActive && "active"}`}
          onClick={() => handleSectionClick(section)}
        >
          {sections[section].title}
        </button>
      );
    });
  };

  const renderActiveSection = () => {
    if (activeSection === "effectiveness") {
      // Render images for the "Effectiveness of Homeopathy" section
      const currentImage = images[imageIndex];
      const imageStyle = {
        maxWidth: "100%", // Set the maximum width to fit the container
        maxHeight: "100%", // Set the maximum height to fit the container
      };

      return (
        <div className="image-slider">
          <img src={currentImage} alt={`Image ${imageIndex + 1}`} style={imageStyle} />
        </div>
      );
    } else {
      // Render text for other sections
      return (
        <div className="section-content">
          <h3>{sections[activeSection].title}</h3>
          <p>{sections[activeSection].text}</p>
        </div>
      );
    }
  };

  return (
    <div className="about-container">
      <div className="section-buttons">{renderSections()}</div>
      <div className="section-content-container">{renderActiveSection()}</div>
    </div>
  );
};

export default About;
