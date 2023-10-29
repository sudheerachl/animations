import React from "react";
import "./faq.css";

const Address = () => {
  const heading = "Homoeopathy Myths and Facts: Busted!";

  const mythsAndFacts = [
    {
      myth: "Homoeopathy is just a placebo effect.",
      fact: "There is growing scientific evidence to support the effectiveness of homeopathy.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3960496/",
    },
    {
      myth: "Homoeopathy is not safe.",
      fact: "Homoeopathic remedies are made from highly diluted substances, which makes them very safe.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4377390/",
    },
    {
      myth: "Homoeopathy is not regulated.",
      fact: "Homoeopathy is regulated by the government in many countries, including India.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4377390/",
    },
    {
      myth: "Homoeopathy is not effective for acute conditions.",
      fact: "Homoeopathy can be effective for a wide range of acute conditions, such as colds, flu, and diarrhea. ",
link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2930910/",
    },
    {
      myth: "Homoeopathy is not effective for chronic conditions.",
      fact: "Homoeopathy can be effective for a wide range of chronic conditions, including asthma, allergies, and eczema.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2930908/",
    },
  ];

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <h1>{heading}</h1>
      <ul>
        {mythsAndFacts.map((mythAndFact) => (
          <li key={mythAndFact.myth} className="myth-and-fact-item">
            <h2 className="myth">{mythAndFact.myth}</h2>
            <p className="fact">{mythAndFact.fact}</p>
            <button onClick={() => handleButtonClick(mythAndFact.link)}>
              Read More
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Address;