import React, { useState } from 'react';
import { Button, Image } from 'antd';
import './Booking-style.css';

const Booking = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="booking-container">
      <h1>Appointment Booking</h1>
      <div className="booking-row">
        <div className="booking-container-1">
         
          <h2>Video Consultation</h2>
          <p>Get a personalized consultation with one of our experts from the comfort of your own home.</p>
          <Button type="primary" href="https://form.jotform.com/232981853512056">
            Book Now
          </Button>
        </div>
        <div className="booking-container-2">
          <h2>WhatsApp Chat Consultation</h2>
          <p>Get a quick and convenient consultation with one of our experts via WhatsApp.</p>
          <Button type="primary" href="https://form.jotform.com/232985023223452">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
