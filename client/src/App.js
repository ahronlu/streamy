import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import StreamCreate from "./Components/streams/StreamCreate";
import StreamDelete from "./Components/streams/StreamDelete";
import StreamEdit from "./Components/streams/StreamEdit";
import StreamList from "./Components/streams/StreamList";
import StreamShow from "./Components/streams/StreamShow";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </Switch>
    </Router>
  );
};

export default App;
