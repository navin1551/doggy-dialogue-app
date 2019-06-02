import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Forums from "./components/Forums";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <section>
          <Header />
        </section>
        <main>
          <Switch>
            <Route path="/about-us" component={AboutUs} />
            <Route path="/register" component={Register} />
            <Route path="/forums" component={Forums} />
          </Switch>
        </main>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}
