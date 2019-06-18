import React from "react";
import { Link } from "react-router-dom";
import "./ForumList.css";
import DoggyContext from "../DoggyContext";

export default class ForumList extends React.Component {
  static contextType = DoggyContext;
  render() {
    return (
      <div className="forum-list">
        <p className="forum-topic">Community Welcome</p>
        <Link to={`/forums/${this.context.forums[0].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[0].name}
          </p>
        </Link>
        <span>Introduce yourself to fellow dog lovers</span>
        <br />
        <span>#</span>
        <br />
        <br />
        <p className="forum-topic">Keeping and Caring for Dogs</p>

        <Link to={`/forums/${this.context.forums[1].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[1].name}
          </p>
        </Link>
        <span>Discuss all matters of dog grooming</span>
        <br />
        <Link to={`/forums/${this.context.forums[2].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[2].name}
          </p>
        </Link>
        <span>All matters to keep your dog healthy</span>
        <br />
        <Link to={`/forums/${this.context.forums[3].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[3].name}
          </p>
        </Link>
        <span>Find out the best training and obedience methods</span>
        <br />
        <Link to={`/forums/${this.context.forums[4].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[4].name}
          </p>
        </Link>
        <span>Questions on your dogs food or snacks answered here</span>
        <br />
        <Link to={`/forums/${this.context.forums[5].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[5].name}
          </p>
        </Link>
        <span>
          General dog related topics that don't belong in other forums
        </span>
        <br />
        <br />
        <p className="forum-topic">Dog Shows and Performance</p>
        <Link to={`/forums/${this.context.forums[6].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[6].name}
          </p>
        </Link>
        <span>Discuss dog shows and getting your dog into shows</span>
        <br />
        <Link to={`/forums/${this.context.forums[7].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[7].name}
          </p>
        </Link>
        <span>
          Discuss rescue dogs, therapy dogs, service dogs, and other working
          dogs
        </span>
        <br />
        <Link to={`/forums/${this.context.forums[8].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[8].name}
          </p>
        </Link>
        <span>Discuss dog performance, agility, tracking and more</span>
        <br />
        <br />
        <p className="forum-topic">Other Dog Interests</p>
        <Link to={`/forums/${this.context.forums[9].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[9].name}
          </p>
        </Link>
        <span>
          Discuss news related to dogs and other animal related events
        </span>
        <br />
        <Link to={`/forums/${this.context.forums[10].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[10].name}
          </p>
        </Link>
        <span>Share stories about your dog</span>
        <br />
        <Link to={`/forums/${this.context.forums[11].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[11].name}
          </p>
        </Link>
        <span>
          Share a tribute to your special four legged friend who is gone
        </span>
        <br />
        <Link to={`/forums/${this.context.forums[12].id}`}>
          <p onClick={this.context.updateForumTitle} className="forum-titles">
            {this.context.forums[12].name}
          </p>
        </Link>
        <span>
          Discuss specific dog breeds including appearance, disposition and
          other characteristics
        </span>
      </div>
    );
  }
}
