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
        <ul>
          <Link to={`/forums/${this.context.forums[0].id}`}>
            <li>{this.context.forums[0].name}</li>
          </Link>
          <span>Introduce yourself to fellow dog lovers</span>
        </ul>
        <br />
        <p className="forum-topic">Keeping and Caring for Dogs</p>
        <ul>
          <Link to={`/forums/${this.context.forums[1].id}`}>
            <li>{this.context.forums[1].name}</li>
          </Link>
          <span>Discuss all matters of dog grooming</span>
          <br />
          <Link to={`/forums/${this.context.forums[2].id}`}>
            <li>{this.context.forums[2].name}</li>
          </Link>
          <span>All matters to keep your dog healthy</span>
          <br />
          <Link to={`/forums/${this.context.forums[3].id}`}>
            <li>{this.context.forums[3].name}</li>
          </Link>
          <span>Find out the best training and obedience methods</span>
          <br />
          <Link to={`/forums/${this.context.forums[4].id}`}>
            <li>{this.context.forums[4].name}</li>
          </Link>
          <span>Questions on your dogs food or snacks answered here</span>
          <br />
          <Link to={`/forums/${this.context.forums[5].id}`}>
            <li>{this.context.forums[5].name}</li>
          </Link>
          <span>
            General dog related topics that don't belong in other forums
          </span>
        </ul>
        <br />
        <p className="forum-topic">Dog Shows and Performance</p>
        <ul>
          <Link to={`/forums/${this.context.forums[6].id}`}>
            <li>{this.context.forums[6].name}</li>
          </Link>
          <span>Discuss dog shows and getting your dog into shows</span>
          <br />
          <Link to={`/forums/${this.context.forums[7].id}`}>
            <li>{this.context.forums[7].name}</li>
          </Link>
          <span>
            Discuss rescue dogs, therapy dogs, service dogs, and other working
            dogs
          </span>
          <br />
          <Link to={`/forums/${this.context.forums[8].id}`}>
            <li>{this.context.forums[8].name}</li>
          </Link>
          <span>Discuss dog performance, agility, tracking and more</span>
        </ul>
        <br />
        <p className="forum-topic">Other Dog Interests</p>
        <ul>
          <Link to={`/forums/${this.context.forums[9].id}`}>
            <li>{this.context.forums[9].name}</li>
          </Link>
          <span>
            Discuss news related to dogs and other animal related events
          </span>
          <br />
          <Link to={`/forums/${this.context.forums[10].id}`}>
            <li>{this.context.forums[10].name}</li>
          </Link>
          <span>Share stories about your dog</span>
          <br />
          <Link to={`/forums/${this.context.forums[11].id}`}>
            <li>{this.context.forums[11].name}</li>
          </Link>
          <span>
            Share a tribute to your special four legged friend who is gone
          </span>
          <br />
          <Link to={`/forums/${this.context.forums[12].id}`}>
            <li>{this.context.forums[12].name}</li>
          </Link>
          <span>
            Discuss specific dog breeds including appearance, disposition and
            other characteristics
          </span>
        </ul>
      </div>
    );
  }
}
