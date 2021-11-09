import { useState, useEffect } from "react";

interface useFetchProps {
  url: string;
}

const useFetch = (props: useFetchProps) => {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  // lifecycle
  useEffect(() => {
    setIsLoading(true);
    fetch(props.url)
      .then((response) => {
        return response.json();
      })
      .then((jsonObj) => {
        setData(jsonObj);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [props.url]);

  // return
  return { isLoading, data };
};

export default useFetch;
