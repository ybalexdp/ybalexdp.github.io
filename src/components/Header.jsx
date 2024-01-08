import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
      <div>
        <div>
          <h1 class="title">
            <a href="https://ybalexdp.github.io/">ybalexdp.me</a>
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
            <li>
              <a href="https://www.amazon.jp/hz/wishlist/ls/3GLDYINL3F797?ref_=wl_share" target="_blank">
                <i class="fab fa-amazon fa-2x icon"></i>
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
