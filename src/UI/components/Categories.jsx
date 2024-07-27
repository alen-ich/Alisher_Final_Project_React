import { useEffect, useState } from "react";
import "./styles.css";

export const Categories = ({ searchByQuote }) => {
  const btnColors = {
    Inspiration: "#F7F6CF",
    Love: "#B6D8F2",
    Life: "#F4CFDF",
    Motivation: "#5784BA",
    Success: "#9AC8EB",
    Wisdom: "#CCD4BF",
    Humor: "#E7CBA9",
    Relationships: "#EEBAB2",
    Happiness: "#F5E2E4",
    Faith: "#F5BFD2",
    Leadership: "#E5DB9C",
    Family: "#D0BCAC",
    Friendship: "#BEB4C5",
    Creativity: "#9AD9DB",
    Change: "#EB96AA",
  };
  const [visibleButtons, setVisibleButtons] = useState([]);

  useEffect(() => {
    Object.keys(btnColors).forEach((category, index) => {
      setTimeout(() => {
        setVisibleButtons((prevVisibleButtons) => [
          ...prevVisibleButtons,
          category,
        ]);
      }, index * 100);
    });
  }, []);

  return (
    <div className="categories">
      <div>
        <p className="categories-tag">Search by tag</p>
        <div className="btn-container">
          {Object.keys(btnColors).map((category) => (
            <div
              key={category}
              className={`btn ${
                visibleButtons.includes(category) ? "visible" : ""
              }`}
              style={{ backgroundColor: btnColors[category] }}
              onClick={() => searchByQuote(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
