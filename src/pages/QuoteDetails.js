import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_quote = [
  { id: "q1", author: "Ali", text: "Learning React is simple" },
  { id: "q2", author: "Waleed", text: "Learning JS is simple" },
  { id: "q3", author: "Saleh", text: "Learning Node is simple" },
];

const QuoteDetails = () => {
  const params = useParams();
  const quote = Dummy_quote.find((quote) => quote.id === params.quoteId);
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
        <h1>Ali</h1>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
