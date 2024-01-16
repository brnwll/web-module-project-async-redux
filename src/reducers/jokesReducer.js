const initialState = {
  jokes: [],
  error: "",
  isFetching: false,
  formButtonText: "Get Joke",
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };
    case "FETCH_JOKES_SUCCESS":
      return {
        ...state,
        jokes: [action.payload],
      };
    case "SET_FORM_BUTTON_TEXT":
      return {
        ...state,
        formButtonText: action.payload,
      };
    default:
      return state;
  }
};

export default jokesReducer;
