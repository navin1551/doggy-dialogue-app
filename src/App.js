import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Forums from "./components/Forums";
import ForumPosts from "./components/ForumPosts";
import UserPost from "./components/UserPost";
import AddNewPost from "./components/AddNewPost";
import EditPost from "./components/EditPost";
import EditReply from "./components/EditReply";
import config from "./config";
import Store from "./Store";
import DoggyContext from "./DoggyContext";
import NavBar from "./components/NavBar";
import ScrollToTop from "./ScrollToTop";
import NotFoundPage from "./components/NotFoundPage";
import ErrorBoundary from "./ErrorBoundary";
import PrivateRoute from "./PrivateRoute";

export default class App extends React.Component {
  state = {
    posts: [],
    replies: [],
    forums: Store.forums,
    forumTitle: ""
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/posts`),
      fetch(`${config.API_ENDPOINT}/replies`)
    ])
      .then(([postRes, replyRes]) => {
        if (!postRes) return postRes.json().then(e => Promise.reject(e));
        if (!replyRes) return replyRes.json().then(e => Promise.reject(e));

        return Promise.all([postRes.json(), replyRes.json()]);
      })
      .then(([posts, replies]) => {
        this.setState({
          posts
        });
        this.setState({
          replies
        });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  addPostHandle = newPost => {
    let currentPosts = this.state.posts;
    currentPosts.push(newPost);
    this.setState({
      store: {
        posts: currentPosts,
        forums: this.state.forums,
        replies: this.state.replies
      }
    });
  };

  addReplyHandle = newReply => {
    let currentReplies = this.state.replies;
    currentReplies.push(newReply);
    this.setState({
      store: {
        replies: currentReplies,
        posts: this.state.posts,
        forums: this.state.forums
      }
    });
  };

  deletePostHandle = id => {
    let updatedPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({
      replies: this.state.replies,
      posts: updatedPosts,
      forums: this.state.forums
    });
  };

  deleteReplyHandle = id => {
    let updatedReplies = this.state.replies.filter(reply => reply.id !== id);
    console.log(updatedReplies);
    this.setState({
      replies: updatedReplies,
      posts: this.state.posts,
      forums: this.state.forums
    });
  };

  updatePost = updatedPost => {
    const newPosts = this.state.posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    this.setState({
      posts: newPosts,
      replies: this.state.replies,
      forums: this.state.forums
    });
  };

  updateReply = updatedReply => {
    const newReplies = this.state.replies.map(reply =>
      reply.id === updatedReply.id ? updatedReply : reply
    );
    this.setState({
      replies: newReplies,
      posts: this.state.posts,
      forums: this.state.forums
    });
  };

  updateForumTitle = e => {
    this.setState({
      forumTitle: e.target.innerHTML
    });
  };

  render() {
    const contextValue = {
      posts: this.state.posts,
      replies: this.state.replies,
      forums: this.state.forums,
      addPost: this.addPostHandle,
      addReply: this.addReplyHandle,
      deletePost: this.deletePostHandle,
      deleteReply: this.deleteReplyHandle,
      updatePost: this.updatePost,
      updateReply: this.updateReply,
      updateForumTitle: this.updateForumTitle,
      forumTitle: this.state.forumTitle
    };

    return (
      <DoggyContext.Provider value={contextValue}>
        <div className="app">
          <section>
            <Header />
            <NavBar />
          </section>
          <main>
            <ScrollToTop>
              <ErrorBoundary>
                <Switch>
                  <Route exact path="/" component={Forums} />
                  <Route path="/register" component={Register} />
                  <Route path="/forums/:folderId" component={ForumPosts} />
                  <Route path="/post/:postId" component={UserPost} />
                  <PrivateRoute path="/new-post" component={AddNewPost} />
                  <PrivateRoute
                    path="/edit-post/:postId"
                    component={EditPost}
                  />
                  <PrivateRoute
                    path="/edit-reply/:replyId"
                    component={EditReply}
                  />
                  <Route component={NotFoundPage} />
                </Switch>
              </ErrorBoundary>
            </ScrollToTop>
          </main>
        </div>
      </DoggyContext.Provider>
    );
  }
}
