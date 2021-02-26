import React, { useState, useEffect } from "react";
import Country from "../Components/Country";
import NewsColumn from "../Components/NewsColumn";
import { Cases } from "../State/use-backend";

const HomeView = stat => {
  const [data] = Cases({});
  // const [data, setData] = useState({});
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // // Fetch user data when the username change
  // const { data, isLoading } = Cases();
  //  const [stats, setStats] = useState(data);

  const selected = [...data].filter(selection => {
    return selection.country === stat;
  });
  console.log(selected);

  const createBody = () => {
    if (isLoading) {
      return "Loading";
    } else {
      return <Country stats={selected} />;
    }
  };

  return (
    <div className="home-view__container">
      {createBody}
      <NewsColumn />
    </div>
  );
};

export default HomeView;
