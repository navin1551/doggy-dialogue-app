import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Forums from "./components/Forums";
import ForumPosts from "./components/ForumPosts";
import UserPost from "./components/UserPost";
import AddNewPost from "./components/AddNewPost";
import Store from "./Store";
import DoggyContext from "./DoggyContext";

export default class App extends React.Component {
  state = {
    store: Store
  };

  render() {
    const contextValue = {
      store: this.state.store
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
              <Route path="/post/:postId" component={UserPost} />
              <Route path="/new-post" component={AddNewPost} />
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
