import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Contents extends React.Component {
  render() {
    return (
      <div class="about">
        <Link to="/about">about</Link>
      </div>
    );
  }
}
