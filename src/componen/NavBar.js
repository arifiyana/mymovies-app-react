import React, { Component } from 'react';
import '../../src/style/NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div class="navbar">
        <h1>- - : M y M o v i e : - -</h1>
        <div class="nav-menu">
          <a href="#home" class="home">
            Home
          </a>
          <a href="#about" class="about">
            Register
          </a>
          <a href="#Team" class="team">
            Category
          </a>
          <a href="#blog" class="blog">
            Contact
          </a>
        </div>
      </div>
    );
  }
}
