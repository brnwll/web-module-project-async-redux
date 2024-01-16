import React from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../actions/jokesActions";

const JokesForm = ({ formButtonText, fetchJokes }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJokes();
  };

  // MVP is just a button that fetches a joke
  // time permitting you may add additional functionality
  // such as a number input that allows you to fetch multiple jokes
  return (
    <form onSubmit={handleSubmit}>
      <button>{formButtonText}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    jokes: state.jokes,
    formButtonText: state.formButtonText,
  };
};

export default connect(mapStateToProps, { fetchJokes })(JokesForm);
