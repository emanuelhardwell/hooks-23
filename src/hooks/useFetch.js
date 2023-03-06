import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    quotes: null,
    isLoading: true,
    hasError: false,
  });

  const getQuote = async () => {
    setState({ ...state, isLoading: true });

    const res = await fetch(url);
    const data = await res.json();
    console.log(url);
    setState({ quotes: data, isLoading: false, hasError: false });
  };

  useEffect(() => {
    getQuote();
  }, [url]);

  return {
    quotes: state.quotes,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
