import React from "react";
import { connect } from "react-redux";

const JokesList = ({ jokes, isFetching, error }) => {
  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>{joke.setup}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    jokes: state.jokes,
  };
};

export default connect(mapStateToProps, {})(JokesList);
