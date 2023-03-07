import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const paragraphRef = useRef();
  const [coordenadas, setCoordenadas] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // console.log(paragraphRef.current.getBoundingClientRect());
    const { width, height } = paragraphRef.current.getBoundingClientRect();
    setCoordenadas({ width, height });
  }, []);

  return (
    <>
      <figure className="text-end d-flex">
        <blockquote className="blockquote">
          <p ref={paragraphRef}> {quote} </p>
        </blockquote>
        <figcaption className="blockquote-footer">{author}</figcaption>
      </figure>

      <code> {JSON.stringify(coordenadas)} </code>
    </>
  );
};
