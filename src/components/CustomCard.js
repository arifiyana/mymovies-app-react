import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { FaThumbsUp } from 'react-icons/fa';
import '../style/Home.css';
import '../style/CustomCard.css';

export default class CustomCard extends Component {
  render() {
    return (
      <div className="containerCard">
        <img className="image" src={this.props.src} alt="" />
        <div className="text-home">
          <p className="title">{this.props.title}</p>
          <p className="subTitle">Rating : {this.props.vote}</p>
        </div>
        <div className="button-all">
          <div className="button-library">
            <Button onClick={this.props.onClick}>Play Trailer</Button>
          </div>
          <div className="button-detail">
            <Button onClick={this.props.onClick}>Detail</Button>
          </div>
        </div>
      </div>
    );
  }
}
