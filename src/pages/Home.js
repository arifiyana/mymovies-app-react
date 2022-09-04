import React, { Component } from 'react';
import { withRouter } from '../withRouter';
import Navi from '../components/Navbar';
import CustomCard from '../components/CustomCard';
import Detail from './Detail';
import '../style/Home.css';
import '../App.css';
import axios from 'axios';

const IMG_API = 'https://image.tmdb.org/t/p/original/';

class Home extends Component {
  state = {
    listMovies: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=9815aa52d894decbbde366fdcec33e5c&language=en-US&page=1')
      .then(function (response) {
        self.setState({
          listMovies: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }

  handleDetailPage(item) {
    this.props.navigate('/detail', {
      state: {
        src: IMG_API + item.poster_path,
        title: item.title,
        genre: item.genre_ids,
        release: item.release_date,
        rating: item.vote_average,
        popularity: item.popularity,
        description: item.overview,
      },
    });
  }

  render() {
    const { listMovies } = this.state;
    return (
      <div className="bg">
        <Navi />
        <div className="list-movies" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {listMovies.map((item) => {
            return <CustomCard src={IMG_API + item.poster_path} title={item.title} vote={item.vote_average} onClick={() => this.handleDetailPage(item)} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
