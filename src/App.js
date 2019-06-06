import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Adopt from "./components/Adopt";
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

  addPostHandle = newPost => {
    let currentPosts = this.state.store.posts;
    let currentPostId = currentPosts[currentPosts.length - 1].id + 1;
    newPost.id = currentPostId;
    currentPosts.push(newPost);
    this.setState({
      store: {
        posts: currentPosts,
        forums: this.state.store.forums,
        replies: this.state.store.replies
      }
    });
  };

  addReplyHandle = newReply => {
    let currentReplies = this.state.store.replies;
    let currentReplyId = currentReplies[currentReplies.length - 1].id + 1;
    newReply.id = currentReplyId;
    currentReplies.push(newReply);
    console.log(currentReplies);
    this.setState({
      store: {
        replies: currentReplies,
        posts: this.state.store.posts,
        forums: this.state.store.forums
      }
    });
  };

  render() {
    const contextValue = {
      store: this.state.store,
      addPost: this.addPostHandle,
      addReply: this.addReplyHandle
    };
    return (
      <DoggyContext.Provider value={contextValue}>
        <div className="app">
          <section>
            <Header />
          </section>
          <main>
            <Route exact path="/" component={AboutUs} />
            <Route path="/register" component={Register} />
            <Route exact path="/forums" component={Forums} />
            <Route path="/adopt" component={Adopt} />
            <Route path="/forums/:folderId" component={ForumPosts} />
            <Route path="/post/:postId" component={UserPost} />
            <Route path="/new-post" component={AddNewPost} />
          </main>
          <section>
            <Footer />
          </section>
        </div>
      </DoggyContext.Provider>
    );
  }
}
