import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Faculty = () => {
  const [randomText, setRandomText] = useState("");
  const homoeopathyPictures = [
    "https://i.imgur.com/1234567.jpg",
    "https://i.imgur.com/8901234.jpg",
    "https://i.imgur.com/5678901.jpg",
  ];

  useEffect(() => {
    fetch("https://random-text-api.com/api/paragraphs/1")
      .then((response) => response.json())
      .then((data) => setRandomText(data.paragraphs[0]));
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="bg-image" style={{
        backgroundImage: `url(${homoeopathyPictures[Math.floor(Math.random() * homoeopathyPictures.length)]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%"
      }}>
        <div className="bg-white opacity-75 p-5 rounded-md">
          <h1 className="text-3xl font-bold">About us</h1>
          <p className="text-lg">{randomText}</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
