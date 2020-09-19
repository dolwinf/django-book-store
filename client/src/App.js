import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./NavBar";
import AddBooks from "./AddBooks";
import Whislist from "./Whislist";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Add" component={AddBooks} />
        <Route path="/Wishlist" component={Whislist} />
      </Switch>
    </Router>
  );
}

export default App;
