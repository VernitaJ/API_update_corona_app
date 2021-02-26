import React from "react";

const HeadingView = () => {
  return (
    <div className="App">
      <div>
        <div className="home-view__heading-container">
          <h1 className="home-view__heading">Corona Outbreak Live Stats</h1>
          <h4 className="home-view__heading-WHO">
            Updates on the global pandemic{" "}
          </h4>
          <a
            className="home-view__heading-image"
            href="https://www.who.int/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-white.svg"
              alt="W.H.O updates"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadingView;
