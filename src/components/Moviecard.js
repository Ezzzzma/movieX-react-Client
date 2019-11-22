import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Moviecard extends Component {
  render() {
    const { movie } = this.props;
    console.log(this.props.movie);
    return (
      <div className="card bg-light m-3">
        <h3 className="card-header text-uppercase">
          {" "}
          {this.props.movie.name}{" "}
        </h3>
        <Link to={`/movies/${movie._id}`}>
          <p className="card-body"> Show more</p>
        </Link>
      </div>
    );
  }
}
