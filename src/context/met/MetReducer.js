const metReducer = (state, action) => {
  switch (action.type) {
    case "GET_WORKS":
      return {
        ...state,
        works: action.payload,
        loading: false,
      };
    case "GET_WORK":
      return {
        ...state,
        work: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_WORKS":
      return {
        ...state,
        works: [],
      };

    default:
      return state;
  }
};

export default metReducer;
