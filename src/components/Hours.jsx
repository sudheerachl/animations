import React from "react";
import { FcCancel, FcOk } from "react-icons/fc";

const Hours = () => {
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "black",
    },
    daysContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "80%",
      margin: "0 auto",
    },
    dayItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "100px",
      margin: "10px",
      backgroundColor: "#0e21fe",
      borderRadius: "50%",
    },
    dayText: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "rgb(255, 255, 255)",
    },
    statusIcon: {
      fontSize: "2rem",
      color: "rgb(255, 255, 255)",
    },
    consultationsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      margin: "0 auto",
    },
    consultationsItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100px",
      margin: "10px",
      backgroundColor: "#0e21fe",
      borderRadius: "10px",
    },
    consultationsText: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "rgb(255, 255, 255)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Clinic Hours</h1>
      <div style={styles.daysContainer}>
        {Days.map((day) => (
          <div style={styles.dayItem} key={day}>
            <h2 style={styles.dayText}>{day}</h2>
            {day === "Saturday" || day === "Sunday" ? (
              <FcCancel style={styles.statusIcon} />
            ) : (
              <FcOk style={styles.statusIcon} />
            )}
          </div>
        ))}
      </div>
      <div style={styles.consultationsContainer}>
        <div style={styles.consultationsItem}>
          <h2 style={styles.consultationsText}>Online Video Consultations</h2>
          <h3 style={styles.consultationsText}>10 am to 12 pm</h3>
          <h4 style={styles.consultationsText}>Indian Standard Time</h4>
        </div>
        <div style={styles.consultationsItem}>
          <h2 style={styles.consultationsText}>WhatsApp Consultations</h2>
          <h3 style={styles.consultationsText}>Reply within 24 hours</h3>
        </div>
      </div>
    </div>
  );
};

export default Hours;
