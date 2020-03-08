import React from 'react';

export default class Links extends React.Component {
  render() {
    return (
      <div>
        <ul class="links">
          <li>
            <a href="https://ybalexdp.hatenablog.com/" target="_blank">
              技術ブログ
            </a>
          </li>
          <li>
            <a href="https://ybalexdp-football.hatenablog.com/" target="_blank">
              サッカーブログ
            </a>
          </li>
          <li>
            <a href="https://booklog.jp/users/ybalexdp" target="_blank">
              ブクログ(読書記録)
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
