import axios from "axios";
export const FETCH_JOKES = "FETCH_JOKE";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";
export const SET_FORM_BUTTON_TEXT = "SET_FORM_BUTTON_TEXT";

export const fetchJokes = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios
    .get("https://official-joke-api.appspot.com/jokes/random")
    .then((res) => {
      dispatch(fetchJokesSuccess(res.data));
      dispatch(setFormButtonText("Get Another Joke"));
    })
    .catch((err) => {
      dispatch(fetchJokesFailure(err.message));
      dispatch(setFormButtonText("Get Joke"));
    })
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});

export const fetchJokesSuccess = (jokes) => ({
  type: FETCH_JOKES_SUCCESS,
  payload: jokes,
});

export const fetchJokesFailure = (error) => ({
  type: FETCH_JOKES_FAILURE,
  payload: error,
});

export const setFormButtonText = (text) => ({
  type: SET_FORM_BUTTON_TEXT,
  payload: text,
});
