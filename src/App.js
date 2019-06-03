import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Forums from "./components/Forums";
import ForumPosts from "./components/ForumPosts";
import Store from "./Store";
import DoggyContext from "./DoggyContext";

export default class App extends React.Component {
  state = {
    posts: Store
  };

  render() {
    const contextValue = {
      posts: this.state.posts
    };
    return (
      <DoggyContext.Provider value={contextValue}>
        <div className="app">
          <section>
            <Header />
          </section>
          <main>
            <Switch>
              <Route path="/about-us" component={AboutUs} />
              <Route path="/register" component={Register} />
              <Route exact path="/forums" component={Forums} />
              <Route path="/forums/:folderId" component={ForumPosts} />
            </Switch>
          </main>
          <section>
            <Footer />
          </section>
        </div>
      </DoggyContext.Provider>
    );
  }
}
