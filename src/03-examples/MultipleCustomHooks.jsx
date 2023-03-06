import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "./Loader";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, onAdd } = useCounter(1);

  const onClickNextQuote = () => {
    onAdd();
  };

  const { quotes, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!quotes && quotes[0];

  // console.log({ quote, author });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h2 className="text-center">MultipleCustomHooks</h2>
          <hr />

          {isLoading ? <Loader /> : <Quote quote={quote} author={author} />}

          <button
            disabled={isLoading}
            className="btn btn-success"
            onClick={onClickNextQuote}
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
};
