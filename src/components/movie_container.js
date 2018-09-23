import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }
    render() {
        // console.log('this.state: ', this.state);
        const movieList = this.state.movies.map( (movieInfo, index) => {
            return(
                <Movie info={movieInfo} key={index}/>
            );
        });

        return(
            <div>
                {movieList}
            </div>
        );
    }
    
    componentWillMount(resp) {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(url).then( (resp) => {
            // console.log('Resp: ', resp);

            this.setState({
                movies: resp.data.feed.entry
            });
        });    
    }
}

export default MovieContainer;
