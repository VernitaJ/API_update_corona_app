import { useEffect, useState } from "react";

export const Cases = () => {
  const [data, setData] = useState(null);
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

  return {
    isLoading,
    data,
    error
  };
};
