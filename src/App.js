import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuotes from "./pages/NewQuotes";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quotes">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
