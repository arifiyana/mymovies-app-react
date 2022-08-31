import React, { Component } from 'react';
import '../../src/style/NewCard.css';

export default class NewCard extends Component {
  render() {
    return (
      <div className="containerCard">
        <img className="image" src={this.props.src} alt="gambar" />
        <h1>{this.props.judul}</h1>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
