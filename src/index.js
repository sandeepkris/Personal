import React from "react";
import ReactDOM from "react-dom";
import YTsearch from "youtube-api-search";
import  _ from 'lodash';
import SearchBar from './components/searchBar';
import { VideoList } from "./components/videoList";
import VideoDetail from "./components/videoDetail";


const API_KEY = "AIzaSyARWr9aAWhGFSUercrb1RVaSqi6pArATHc";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Enrique Iglesias');

  }

  videoSearch(term) {
    YTsearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
      //this.setState({videos:videos})
    });
  }
  
  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo:selectedVideo}) }
          videos={this.state.videos} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));