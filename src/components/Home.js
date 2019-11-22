import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_HOST } from "../config/api";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid black;
  border-radius: 9px;
  margin: 0.5em 0;
  padding: 1em;
`; // Bu kutuphane ile bu sekilde style yazip inputlari Input a cevirerek Css yazilabiliyor

export default class Home extends Component {
  state = {
    name: "",
    description: "",
    released: 1,
    genre: [],
    movieUrl: ""
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const reqBody = this.state;
    const response = await axios.post(`${API_HOST}/movies`, reqBody);

    console.log(response.data);
  };
  onChangeMovieName = event => {
    console.log(event.target.value);

    if (event.target.value.length > 3)
      this.setState({ name: event.target.value });
  };
  onChangeMovieDescription = event => {
    console.log(event.target.value);

    if (event.target.value.length > 3)
      this.setState({ description: event.target.value });
  };
  onChangeMovieRelease = event => {
    console.log(event.target.value);
    if (event.target.value > 1800 && event.target.value < 2022)
      this.setState({ released: event.target.value });
  };
  onChangeMovieGenre = event => {
    console.log(event.target.value);
    if (event.target.value.length > 0)
      this.setState({
        genre: event.target.value.split(",").map(genre => genre.trim())
      });
  };
  onChangeMovieUrl = event => {
    console.log(event.target.value);
    if (event.target.value.length > 0)
      this.setState({ movieUrl: event.target.value });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-3 m-4">
          <h1 className="col-9">Welcome to MovieX</h1>
          <button
            type="button"
            className="btn btn-warning ml-auto p-1 col-3"
            data-toggle="modal"
            data-target="#add-movie-model"
          >
            Add Movie
          </button>
        </div>

        <div
          className="modal fade"
          id="add-movie-model"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="add-movie-form">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Movie Name</label>
                    <nput
                      type="text"
                      className="form-control"
                      id="movie-name"
                      aria-describedby="emailHelp"
                      placeholder="Enter movie name"
                      onChange={event => this.onChangeMovieName(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Movie Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="movie-description"
                      aria-describedby="emailHelp"
                      placeholder="Enter movie Description"
                      onChange={event => this.onChangeMovieDescription(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Movie Release Date</label>
                    <input
                      type="number"
                      className="form-control"
                      id="movie-released"
                      aria-describedby="emailHelp"
                      placeholder="Enter Release Date"
                      onChange={event => this.onChangeMovieRelease(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Movie Genres</label>
                    <input
                      type="text"
                      className="form-control"
                      id="movie-genres"
                      aria-describedby="emailHelp"
                      placeholder="Thriller, Sci-fic..."
                      onChange={event => this.onChangeMovieGenre(event)}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Please seperate genres by comma.
                    </small>
                  </div>
                  <div className="form-group">
                    <label for="movie-image">Movie Image Url</label>
                    <input
                      type="text"
                      className="form-control"
                      id="movie-image"
                      aria-describedby="emailHelp"
                      placeholder="Enter movie image url"
                      onChange={event => this.onChangeMovieUrl(event)}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={e => this.handleFormSubmit(e)}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row justify-content-left m-4">
          <div className="col-6">
            <Link to="/movies">
              <button className="btn btn-light w-75">Show Me All Movies</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
