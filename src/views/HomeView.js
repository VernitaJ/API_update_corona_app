import React, { useState, useEffect } from "react";
import CountryCases from "../Components/CountryCases";
import NewsColumn from "../Components/NewsColumn";
// import { Cases } from "../State/use-backend";

const HomeView = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data when the username change
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://corona.lmao.ninja/v2/countries`);
        const data = await res.json();
        console.log("changing data");
        setData(data);
      } catch (err) {
        console.error(err);
        setError(new Error("could not load"));
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);
  // // const { data, isLoading } = Cases();
  // const [stats, setStats] = useState(data);

  const sortBy = sortField => {
    let sorting;
    if (sortField === "country") {
      sorting = [...data].sort((a, b) => {
        if (a[sortField] > b[sortField]) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      sorting = [...data].sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    setData(sorting);
    createBody();
  };

  const createBody = () => {
    if (isLoading) {
      return "Loading";
    } else {
      return <CountryCases stats={data} sortBy={sortBy} />;
    }
  };

  return (
    <div className="home-view__container">
      {createBody()}
      <NewsColumn />
    </div>
  );
};

export default HomeView;
