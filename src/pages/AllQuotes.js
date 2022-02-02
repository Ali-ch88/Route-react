import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const Dummy_quote = [
  { id: "q1", author: "Ali", text: "Learning React is simple" },
  { id: "q2", author: "Waleed", text: "Learning JS is simple" },
  { id: "q3", author: "Saleh", text: "Learning Node is simple" },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={Dummy_quote} />
    </div>
  );
};

export default AllQuotes;
