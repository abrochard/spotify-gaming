import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import LazyLoad, { forceCheck } from 'react-lazyload';
import AlbumsJSON from '../albums.json';

import './index.css';

// perpare the collection
var x = Math.floor(Math.random()*AlbumsJSON.length);
var randAlbum = {
  id: '',
  title: 'Random',
  cover: 'random.jpg',
  url: AlbumsJSON[x].url
};

const Albums = [randAlbum].concat(
  AlbumsJSON.sort((a, b) => {
    return a.title.localeCompare(b.title);
  }).map(a => {
    a.cover = 'covers/'+a.id+'.jpg';
    a.display = true;
    return a;
  })
);

class App extends Component {
  constructor(props) {
    super(props);

    // album is {cover, url, id, title, display}
    this.state = {albums: Albums};
  }

  updateAlbums(searchTerm) {
    var albums = Albums;

    if (searchTerm != "") {
      albums = albums.map(a => {
        if (a.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
          a.display = true;
        } else {
          a.display = false;
        }
        return a;
      });
    }

    this.setState({albums: albums}, () => {forceCheck();});
  }

  renderSearchBar() {
    return (
      <div className="header">
        <span className="input-group search-bar">
          <SearchBar
            onChange={(term) => this.updateAlbums(term)}
            onRequestSearch={(term) => this.updateAlbums(term)}
            style={{
              margin: '0 auto',
              width: '100%'
            }}
            />
        </span>
      </div>
    );
  }

  renderAlbum(a,i) {
    if (!a.display) {
      return null;
    }

    return (
      <div className="album" key={a.id+i}>
        <a target="_blank" href={a.url}>
          <LazyLoad height={100} offset={100}>
            <img src={a.cover} className="album-cover"/>
          </LazyLoad>
        </a>
      </div>
    );
  }

  renderAlbums() {
    return (
      <div className="album-list">
        {this.state.albums.map(this.renderAlbum)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSearchBar()}
        {this.renderAlbums()}
      </div>
    );
  }
}

export default App;
