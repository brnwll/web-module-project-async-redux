import React from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../actions/jokesActions";

const JokesForm = ({ formButtonText, fetchJokes, isFetching }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJokes();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="formButton" disabled={isFetching}>
        {formButtonText}
      </button>
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
