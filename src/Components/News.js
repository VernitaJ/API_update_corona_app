import React from "react";
import { NewsStories } from "../State/use-news-backend";

const News = () => {
  const { news } = NewsStories();
  const stories = { ...news };

  return (
    <div className="news-stories">
      <div>
        {Object.entries(stories).map((news, key) => {
          return (
            <div className="home-view__news-item" key={key}>
              <h4 className="news-column__article-heading">{news[1].title}</h4>
              <a
                className="news-column__article-link"
                href={news[1].url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="news-column__article-image"
                  src={news[1].urlToImage}
                  alt="news article link"
                />
                <p className="news-column__article-text">
                  {news[1].description}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
