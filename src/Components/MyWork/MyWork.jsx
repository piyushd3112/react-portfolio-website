import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleImageClick = (index) => {
    setSelectedWork(index === selectedWork ? null : index);
  };

  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="work-item"
            onClick={() => handleImageClick(index)}
          >
            <img src={work.w_img} alt={`work-${index}`} className="work-img" />
            {selectedWork === index && (
              <div className="work-overlay">
                <button className="show-code">Show Code</button>
                <button className="show-live">Live Demo</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
