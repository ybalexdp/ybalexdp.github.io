import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {About} from './components/About';
import {Links} from './components/Links';

export const  App = () => (
  <BrowserRouter basename={"https://ybalexdp.me"}>
    <div class="measure">
      <Header />
      <Route exact path="/" component={Links}></Route>
      <Route path="/about" component={About}></Route>
      <Footer />
    </div>
  </BrowserRouter>
);
