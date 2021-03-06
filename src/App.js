import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import {Container,Col,Row} from 'reactstrap';
const API_KEY = 'AIzaSyB8LDVNrV1gAD3oUA7Xb18zLTfiESfX7-o';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('music');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <Container>
        <Row>
          <Col>
              <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
              </div>
          </Col>
        </Row>
      </Container>
     
      
    );
  }
}

export default App;
