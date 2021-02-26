import React from "react";
import HomeView from "../views/HomeView";
import Totals from "../views/Totals";
import HeadingView from "../views/HeadingView";

const HomeLayout = () => {
  return (
    <div>
      <HeadingView />
      <div>
        <Totals />
      </div>
      <div className="container__stats-and-news">
        <HomeView />
      </div>
    </div>
  );
};

export default HomeLayout;
