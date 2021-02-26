import { useEffect, useState } from "react";

export const NewsStories = () => {
  const [news, setNews] = useState([]);
  console.log("news", news);
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var targetUrl =
    "https://newsapi.org/v2/top-headlines?country=gb&apiKey=986a408f8bbe4b628257aaa2367bcf4e";

  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const response = await fetch(proxyUrl + targetUrl);
    response
      .json()
      .then(news => setNews(news))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    news
  };
};
