import React, { Component } from 'react';
import Navi from '../components/Navbar';
import { withRouter } from '../withRouter';
import { Button } from 'react-bootstrap';
import '../style/Detail.css';

class Detail extends Component {
  goBack() {
    this.props.navigate(-1);
  }

  render() {
    return (
      <div>
        <Navi />
        <div className="content">

          <div className="content-detail">
            <h2>{this.props.location.state.title}</h2>
            <hr></hr>
            <p>Rating : {this.props.location.state.rating}</p>
            <p>Popularity : {this.props.location.state.popularity}</p>
            <p>Release : {this.props.location.state.release}</p>
            <p>Genre : {this.props.location.state.genre}</p>
            <h4>Overview</h4>
            <div className="over-content">
            <p>{this.props.location.state.description}</p>
            </div>
            <hr></hr>
            <Button onClick={(value) => this.goBack(value)}>Back to Main</Button>
          </div>

          <div className="content-image">
            <img src={this.props.location.state.src} />
          </div>

        </div>
        {/* <div className="content-overview"></div> */}
      </div>
    );
  }
}

export default withRouter(Detail);
