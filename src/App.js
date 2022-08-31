import React, { Component } from 'react';
import NavBar from './componen/NavBar';
import NewCard from './componen/NewCard';

export default class App extends Component {

  render() {
    const listNews = [
      {
        image: 'https://cdn.keepo.me/images/post/covers/2019/04/11/main-cover-image-2f80380a-e5e9-4295-b3f5-a8dccc9d7eac.jpg',
        title: 'Genre : Film Sci-Fi',
        jdl: 'Film 1',
      },
      {
        image: 'https://cdn.medcom.id/dynamic/content/2022/01/14/1377001/EIJ7vNHno6.jpg?w=480',
        title: 'Genre : Film Keluarga',
        jdl: 'Film 2',
      },
      {
        image: 'http://asset-a.grid.id/crop/0x0:0x0/750x500/photo/haifoto/original/75217_poster-jujur-film-dunkirk.jpg',
        title: 'Genre : Film Sci-Fi',
        jdl: 'Film 3',
      },
      {
        image: 'https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2022/08/22/poster-film-seoul-vibe-netflixj-20220822091108.jpg',
        title: 'Genre : Film Komedi',
        jdl: 'Film 4',
      },
      {
        image: 'https://www.asshiddiqiyah2.com/media/k2/items/cache/737344dd8934cc52da9f7f85f2627abb_XL.jpg',
        title: 'Genre : Film Horor',
        jdl: 'Film 5',
      },
      {
        image: 'https://i.ytimg.com/vi/zmG31osvP4w/maxresdefault.jpg',
        title: 'Genre : Film Komedi',
        jdl: 'Film 6',
      },
      {
        image: 'https://statics.indozone.news/content/2022/04/22/Z8sPz1p/citra-sinema-rilis-poster-film-naga-naga-naga-yang-tayang-di-bioskop-pada-16-juni-202212_700.jpg',
        title: 'Genre : Film Romantis',
        jdl: 'Film 7',
      },
      {
        image: 'https://cdn.kincir.com/2/LjV7UdwTNTNlyTPPZgHdm6Dv6Ikp1ybXWl33lV4WCJM/transform/rs:fit:764/src/production/2020-07/741x532_c7bc6d2b44b3350664aa4dc72787828eedc4d3f5.jpg',
        title: 'Genre : Film Kolosal',
        jdl: 'Film 8',
      },
      {
        image: 'https://akcdn.detik.net.id/visual/2022/06/07/film-ivanna-2022_169.jpeg?w=650',
        title: 'Genre : Film Horor',
        jdl: 'Film 9',
      },
    ];

    return (
      <div>
        <NavBar />
        {/* sebuah contoh props */}
        {listNews.map((data) => {
          return <NewCard src={data.image} judul={data.jdl} title={data.title} />;
        })}
        {/* <NewCard /> */}
      </div>
    );
  }
}

