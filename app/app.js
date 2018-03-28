import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from 'material-ui-search-bar';
import AlbumsJSON from '../albums.json';

import './index.css';

// perpare the collection
var x = Math.floor(Math.random()*AlbumsJSON.length);
var randAlbum = {
  id: '',
  title: 'Random',
  cover: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
  url: AlbumsJSON[x].url
};

const Albums = [randAlbum].concat(
  AlbumsJSON.sort((a, b) => {
    return a.title.localeCompare(b.title);
  }).map(a => {
    a.cover = 'covers/'+a.id+'.jpg';
    return a;
  })
);

class App extends Component {
  constructor(props) {
    super(props);

    // album is {cover, url, id, title}
    this.state = {albums: Albums};
  }

  updateAlbums(searchTerm) {
    var albums = Albums;

    if (searchTerm != "") {
      albums = albums.filter(a => {
        return a.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
      });
    }

    this.setState({albums: albums});
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
    return (
      <Col key={a.id+i}>
        <div className="album">
          <a target="_blank" href={a.url}>
            <img src={a.cover} className="album-cover"/>
          </a>
        </div>
      </Col>
    );
  }

  renderAlbums() {
    return (
      <Container className="full-space">
        <Row className="full-space">
          {this.state.albums.map(this.renderAlbum)}
        </Row>
      </Container>
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
