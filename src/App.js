import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import jokesReducer from "./reducers/jokesReducer";
import JokesForm from "./components/JokesForm";
import JokesList from "./components/JokesList";
import "./App.css";

// MVP is just a button that fetches a joke
// time permitting you may add additional functionality
// such as a number input that allows you to fetch multiple jokes

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  jokesReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Random Joke Generator</h1>
        <JokesForm />
        <JokesList />
      </div>
    </Provider>
  );
}

export default App;
