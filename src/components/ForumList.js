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
        </ul>
        <br />
        <p className="forum-topic">Keeping and Caring for Dogs</p>
        <ul>
          <Link to={`/forums/${this.context.forums[1].id}`}>
            <li>{this.context.forums[1].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[2].id}`}>
            <li>{this.context.forums[2].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[3].id}`}>
            <li>{this.context.forums[3].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[4].id}`}>
            <li>{this.context.forums[4].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[5].id}`}>
            <li>{this.context.forums[5].name}</li>
          </Link>
        </ul>
        <br />
        <p className="forum-topic">Dog Shows and Performance</p>
        <ul>
          <Link to={`/forums/${this.context.forums[6].id}`}>
            <li>{this.context.forums[6].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[7].id}`}>
            <li>{this.context.forums[7].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[8].id}`}>
            <li>{this.context.forums[8].name}</li>
          </Link>
        </ul>
        <br />
        <p className="forum-topic">Other Dog Interests</p>
        <ul>
          <Link to={`/forums/${this.context.forums[9].id}`}>
            <li>{this.context.forums[9].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[10].id}`}>
            <li>{this.context.forums[10].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[11].id}`}>
            <li>{this.context.forums[11].name}</li>
          </Link>
          <br />
          <Link to={`/forums/${this.context.forums[12].id}`}>
            <li>{this.context.forums[12].name}</li>
          </Link>
        </ul>
      </div>
    );
  }
}
