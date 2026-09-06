import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    console.log("Fetching:", url);
    fetch(url, { signal: controller.signal })
      .then((response) => {
        console.log("Response ok:", response.ok, "status:", response.status);
        if (!response.ok) {
          throw new Error("Could not load the data");
        }
        return response.json();
      })
      .then((result) => {
        console.log("Data:", result);
        setData(result);
      })
      .catch((err) => {
        console.log("Error:", err.name, err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}