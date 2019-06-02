import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <section>
          <Header />
        </section>
        <main>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/register" component={Register} />
        </main>
      </div>
    );
  }
}
