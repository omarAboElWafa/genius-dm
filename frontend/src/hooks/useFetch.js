import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('The fetch was aborted!');
        } else {
          setIsLoading(false);
          setError('Could not fetch the data!');
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
