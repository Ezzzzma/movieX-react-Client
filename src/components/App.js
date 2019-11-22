import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getMovies } from "../actions";

import Movie from "./Movie";
import MovieCard from "./Moviecard";
import Home from "./Home";
import Loading from "./Loading";

import { API_HOST } from "../config/api";

class App extends React.Component {
  state = {
    movies: []
  };
  componentDidMount() {
    this.props.getMovies();
    console.log("make all request");
    console.log(this.props.movies);
  }
  // getAllMovies = async () => {
  //   try {
  //     // Fetch sends a GET request by defaultm first parameter is the url
  //     const response = await axios.get(`${API_HOST}/movies`);
  //     this.setState({ movies: response.data });
  //     console.log(this.state.movies);
  //   } catch (error) {}
  // };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <div className="card m-3">
              {this.props.movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} />
              ))}
            </div>
          </Route>
          <Route path="/movies/:movieID" component={Movie} />
          {/* {this.props.loadingState. && <Loading />} */}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loadingState, movies } = state;
  return {
    loadingState,
    movies
  };
};

export default connect(mapStateToProps, { getMovies })(App);
