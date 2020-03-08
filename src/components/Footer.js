import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="turf">
          <div class="flag">
            <img src="img/flag.png" width="32" height="32" />
          </div>
          <div class="horserace1">
            <div class="tooltip">
              <i class="fas fa-exclamation-triangle"></i>工事中
            </div>
            <img src="img/horse1.jpeg" />
          </div>
          <div></div>
          <div class="horserace2">
            <div class="tooltip">ほい</div>
            <img src="img/horse2.jpeg" />
          </div>
          <div class="flag">
            <img src="img/flag.png" width="32" height="32" />
          </div>
        </div>
      </div>
    );
  }
}
