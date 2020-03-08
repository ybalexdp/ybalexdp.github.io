import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Links from './components/Links';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div class="measure">
      <Header />
      <Route exact path="/" component={Links}></Route>
      <Route path="/about" component={About}></Route>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
