import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var ReactRouter = require('react-router');

ReactDOM.render(<App />, document.getElementById('app'));
/*
const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Layout>
      <Route path="/about" component={About}></Route>
    </Layout>
  </Router>,
app);
*/
