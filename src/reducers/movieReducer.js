export default (state = [], action) => {
    switch (action.type) {
      case "GET_MOVIES":
        return action.payload;
      default:
        return state;
    }
  };
  
  // const INITIAL_STATE = {
  //   movies: []
  // };
  
  // const moviesReducer = (state = INITIAL_STATE, action) => {
  //   switch (action.type) {
  //     case "GET_MOVIES":
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // };
  
  // export default moviesReducer;
  