import React, { Component } from "react";
import axios from "axios";

export default class Movie extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const movieID = this.props.match.params.movieID;
    this.getMovie(movieID);
  }

  getMovie = async movieID => {
    try {
      const response = await axios.get(
        `https://lit-waters-49720.herokuapp.com/movies/${movieID}`
      );
      this.setState({ movie: response.data });
    } catch (error) {}
  };
  render() {
    console.log(this.state.movie);
    return (
      <div className="card m-3 p-4 bg-info text-white">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="card-img" src={this.state.movie.movieUrl} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-uppercase font-weight-bold">
                {this.state.movie.name}
              </h2>
              <h4 className="card-text ">
                Description: {this.state.movie.description}
              </h4>
              <br />
              <span>{this.state.movie.genre}</span>
              <div className="footer">
                <h5>{this.state.movie.release}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
