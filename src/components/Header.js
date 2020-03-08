import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 class="title">
            <a href="http://localhost:8080">ybalexdp.me</a>
          </h1>
        </div>
        <div>
          <ul id="nav">
            <li>
              <a href="https://github.com/ybalexdp" target="_blank">
                <i class="fab fa-github fa-2x icon"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ybalexdp" target="_blank">
                <i class="fab fa-twitter fa-2x icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p class="mail">
            <a href="mailto:ybalexdp@gmail.com">ybalexdp@gmail.com</a>
          </p>
        </div>
        <div class="about">
          <Link to="/about">about</Link>
        </div>
      </div>
    );
  }
}
