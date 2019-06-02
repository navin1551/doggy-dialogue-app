import React from "react";
import "./ForumList.css";

export default class ForumList extends React.Component {
  render() {
    return (
      <div>
        <p className="forum-topic">Doggy Community Welcome</p>
        <ul>
          <li>Introductions</li>
          <br />
          <li>Photo Contest</li>
        </ul>
        <br />
        <p className="forum-topic">Keeping and Caring for Dogs</p>
        <ul>
          <li>Dog Grooming</li>
          <br />
          <li>Dog Health</li>
          <br />
          <li>Dog Training and Behavior</li>
          <br />
          <li>Dog Food</li>
          <br />
          <li>General Dog Discussion</li>
        </ul>
        <br />
        <p className="forum-topic">Dog Shows and Performance</p>
        <ul>
          <li>Dog Shows</li>
          <br />
          <li>Working Dogs</li>
          <br />
          <li>Dog Sports</li>
        </ul>
        <br />
        <p className="forum-topic">Other Dog Interests</p>
        <ul>
          <li>Dog News</li>
          <br />
          <li>Dog Stories</li>
          <br />
          <li>Dog Memorials</li>
          <br />
          <li>Dog Breeds</li>
        </ul>
      </div>
    );
  }
}
