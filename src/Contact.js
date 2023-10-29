import React, { useState } from 'react';
import "./contact.css"
import doctorImage from './img/contact.jpg';

const Contact = () => {
  const [activeSection, setActiveSection] = useState('note');

  const sections = {
    note: {
      title: 'Doctor\'s Note',
      text: `As a believer of "change is inevitable". I as a physician firmly believe in the power of adapting one's thoughts as playing a key role in understanding health and managing adversities therewith.
      In times, where everyone wants a quick relief I seek not to just mask your symptoms of discomfort and dis-ease but to understand the roots of your illness and help aid it. If Pills and syringes could do all the work we would have mastered human bodies and minds already. As a physician of alternative medicine i believe in integrated therapy and will strive to give each of you under my care a happier health based on your individual needs. It's a fact that all of us belong to one species yet we differ from each other in most unique way and with homeopathy I would address this individual in need of aid.I make no fake promises but will take genuine efforts to take steps together patiently on your road to a healthier you.
      `,
    },
    contact1: {
      title: 'Contact Information',
      text: `
         `,

    },
    contact2: {
      title: '',
      text: `Phone number:  9940640969
               `,

    },
    contact3: {
      title: '',
      text: `Gmail:  akhilajiddu19@gmail.com
               `,

    },
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderSections = () => {
    return Object.keys(sections).map((section) => {
      const isActive = section === activeSection;
      return (
        <div
          key={section}
          className={`section ${isActive && 'active'}`}
          onClick={() => handleSectionClick(section)}
        >
          <h3>{sections[section].title}</h3>
          <p>{sections[section].text}</p>
        </div>
      );
    });
  };

  const renderDoctorImage = () => {
    return (
      <img
        src={doctorImage}
        alt="Dr. Akhila"
        className="doctor-image"
        style={{
          width: '50%',
          height: '50%',
          position: 'absolute',
          top: '0',
          right: '0',
          transform: 'translate(50%, 50%)',
        }}
      />
    );
  };

  return (
    <div className="contact-container">
      {renderSections()}
      {renderDoctorImage()}
    </div>
  );
};

export default Contact;
