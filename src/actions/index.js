import axios from "axios";
import { API_HOST } from "../config/api";

export const getMovies = () => async dispatch => {
  dispatch({ type: "LOADING_START" });
  // dispatch({ type: "GET_MOVIES" });

  try {
    const response = await axios.get(
      `https://lit-waters-49720.herokuapp.com/movies`
    );
    if (response.status === 200) {
      dispatch({ type: "GET_MOVIES", payload: response.data });
      dispatch({ type: "LOADING_FINISH" });
      console.log(response);
    }
  } catch (error) {}
};

// export const postMovies = () => async dispatch => {
//   dispatch({ type: "LOADING_START" });
// };
