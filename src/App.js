import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./components/Header";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Container>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
