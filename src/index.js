import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from 'root/src/components/search_bar'; //.compnents/search_bar
import VideoList from 'root/src/components/video_list';
import VideoDetail from 'root/src/components/video_detail';


// console.log('butts');

const API_KEY = 'AIzaSyAVShZQZPTDb3Xew5hfKBbuBdJ2nfv0QUU';

//create new component. Will produce html
class App extends Component { //our component to be instantiated/displayed
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log('Grabbed youtube video data:', videos);
      //this.setState({ videos }); // equivalent to {videos: videos}!!!!!!!
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 250);

    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  };
}

//take html and shove it into the DOM
ReactDOM.render(<App />, document.querySelector('.container')); //have wrapped component in JSX tags to instantiate
//instantiated component, where to append that hoooooo