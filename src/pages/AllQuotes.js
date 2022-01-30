import React, { Fragment } from "react";
import { useParams, Route, Switch } from "react-router-dom";
import Comments from "../components/comments/Comments";

const AllQuotes = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>This is All Quote Page</h1>
      <p>{params.quoteId}</p>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        {/* <Comments /> */}
        <h1>Ali</h1>
      </Route>
    </Fragment>
  );
};

export default AllQuotes;
