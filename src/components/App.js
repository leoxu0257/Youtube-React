import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'


class App extends React.Component{
state={ video:[] }

    onTermSubmit = async term =>{
        const response = await youtube.get('/search', {
                params:{
                    q:term
                }
            });
            this.setState({video: response.data.items});
    };

    render(){
        return( 
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.video.length} videos.
            </div>
            
        );
    }
}

export default App;