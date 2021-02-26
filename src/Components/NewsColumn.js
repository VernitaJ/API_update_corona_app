import React from "react";
import News from "./News";

const NewsColumn = () => {
  return (
    <div className="home-view__news-column">
      <h2 className="news-column__heading">NEWS AND INFORMATION</h2>
      <iframe
        className="home-view__news-item"
        src="https://www.youtube.com/embed/BtN-goy9VOY"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      <News />
    </div>
  );
};

export default NewsColumn;
