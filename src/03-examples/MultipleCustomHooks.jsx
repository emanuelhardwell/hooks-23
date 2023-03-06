import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

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

          {isLoading ? (
            <div className="alert alert-primary" role="alert">
              Cargando ...
            </div>
          ) : (
            <figure className="text-end">
              <blockquote className="blockquote">
                <p> {quote} </p>
              </blockquote>
              <figcaption className="blockquote-footer">{author}</figcaption>
            </figure>
          )}

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
