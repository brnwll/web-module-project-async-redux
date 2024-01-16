import React from "react";
import { connect } from "react-redux";

const JokesList = ({ jokes }) => {
  return (
    <>
      <h2>Jokes List</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.setup}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
  };
};

export default connect(mapStateToProps, {})(JokesList);
