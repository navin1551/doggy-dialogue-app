import React from "react";
import { Link } from "react-router-dom";
import "./ForumList.css";
import DoggyContext from "../DoggyContext";

export default class ForumList extends React.Component {
  static contextType = DoggyContext;
  render() {
    let introTotal = this.context.posts.filter(post => post.forumid === 1)
      .length;
    let dgTotal = this.context.posts.filter(post => post.forumid === 2).length;
    let dhTotal = this.context.posts.filter(post => post.forumid === 3).length;
    let dtbTotal = this.context.posts.filter(post => post.forumid === 4).length;
    let dfTotal = this.context.posts.filter(post => post.forumid === 5).length;
    let gddTotal = this.context.posts.filter(post => post.forumid === 6).length;
    let dsTotal = this.context.posts.filter(post => post.forumid === 7).length;
    let wdTotal = this.context.posts.filter(post => post.forumid === 8).length;
    let dogSportsTotal = this.context.posts.filter(post => post.forumid === 9)
      .length;
    let dnTotal = this.context.posts.filter(post => post.forumid === 10).length;
    let dogStoriesTotal = this.context.posts.filter(post => post.forumid === 11)
      .length;
    let dmTotal = this.context.posts.filter(post => post.forumid === 12).length;
    let dbTotal = this.context.posts.filter(post => post.forumid === 13).length;

    return (
      <div className="forum-list">
        <p className="forum-topic">Community Welcome</p>
        <Link to={`/forums/${this.context.forums[0].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[0].name}
          </p>
        </Link>
        <span className="forum-info">
          Introduce yourself to fellow dog lovers
        </span>
        <span className="forum-totals">{introTotal}</span>
        <br />
        <br />
        <p className="forum-topic">Keeping and Caring for Dogs</p>

        <Link to={`/forums/${this.context.forums[1].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[1].name}
          </p>
        </Link>
        <span className="forum-info">Discuss all matters of dog grooming</span>
        <span className="forum-totals">{dgTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[2].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[2].name}
          </p>
        </Link>
        <span className="forum-info">All matters to keep your dog healthy</span>
        <span className="forum-totals">{dhTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[3].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[3].name}
          </p>
        </Link>
        <span className="forum-info">
          Find out the best training and obedience methods
        </span>
        <span className="forum-totals">{dtbTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[4].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[4].name}
          </p>
        </Link>
        <span className="forum-info">
          Questions on your dogs food or snacks answered here
        </span>
        <span className="forum-totals">{dfTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[5].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[5].name}
          </p>
        </Link>
        <span className="forum-info">
          General dog related topics that don't belong in other forums
        </span>
        <span className="forum-totals">{gddTotal}</span>
        <br />
        <br />
        <p className="forum-topic">Dog Shows and Performance</p>
        <Link to={`/forums/${this.context.forums[6].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[6].name}
          </p>
        </Link>
        <span className="forum-info">
          Discuss dog shows and getting your dog into shows
        </span>
        <span className="forum-totals">{dsTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[7].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[7].name}
          </p>
        </Link>
        <span className="forum-info">
          Discuss rescue dogs, therapy dogs, service dogs, and other working
          dogs
        </span>
        <span className="forum-totals">{wdTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[8].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[8].name}
          </p>
        </Link>
        <span className="forum-info">
          Discuss dog performance, agility, tracking and more
        </span>
        <span className="forum-totals">{dogSportsTotal}</span>
        <br />
        <br />
        <p className="forum-topic">Other Dog Interests</p>
        <Link to={`/forums/${this.context.forums[9].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[9].name}
          </p>
        </Link>
        <span className="forum-info">
          Discuss news related to dogs and other animal related events
        </span>
        <span className="forum-totals">{dnTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[10].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[10].name}
          </p>
        </Link>
        <span className="forum-info">Share stories about your dog</span>
        <span className="forum-totals">{dogStoriesTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[11].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[11].name}
          </p>
        </Link>
        <span className="forum-info">
          Share a tribute to your special four legged friend who is gone
        </span>
        <span className="forum-totals">{dmTotal}</span>
        <br />
        <Link to={`/forums/${this.context.forums[12].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[12].name}
          </p>
        </Link>
        <span className="forum-info">
          Discuss specific dog breeds including appearance, disposition and
          other characteristics
        </span>
        <span className="forum-totals">{dbTotal}</span>
      </div>
    );
  }
}
