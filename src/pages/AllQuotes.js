import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const Dummy_quote = [
  { id: "q1", author: "Ali", text: "React is a react" },
  { id: "q2", author: "Waleed", text: "React is a react react" },
  { id: "q3", author: "Saleh", text: "React is a JS" },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={Dummy_quote} />
    </div>
  );
};

export default AllQuotes;
