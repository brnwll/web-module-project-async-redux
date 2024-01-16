import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import jokesReducer from "./reducers/jokesReducer";
import JokesForm from "./components/JokesForm";
import JokesList from "./components/JokesList";
import "./App.css";

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

// JOKES API:
//
// https://official-joke-api.appspot.com/random_joke
// https://official-joke-api.appspot.com/jokes/random
// {"type":"general","setup":"Why are fish easy to weigh?","punchline":"Because they have their own scales.","id":303}
//
// https://official-joke-api.appspot.com/random_ten
// https://official-joke-api.appspot.com/jokes/ten
// [{"type":"general","setup":"Why did the barber win the race?","punchline":"He took a short cut.","id":320},{"type":"general","setup":"When does a joke become a dad joke?","punchline":"When it becomes apparent.","id":286},{"type":"general","setup":"Why couldn't the kid see the pirate movie?","punchline":"Because it was rated arrr!","id":315},{"type":"general","setup":"What did the late tomato say to the early tomato?","punchline":"I’ll ketch up","id":177},{"type":"general","setup":"Well...","punchline":"That’s a deep subject.","id":65},{"type":"general","setup":"Why can't bicycles stand on their own?","punchline":"They are two tired","id":5},{"type":"general","setup":"What does C.S. Lewis keep at the back of his wardrobe?","punchline":"Narnia business!","id":22},{"type":"general","setup":"What did the duck say when he bought lipstick?","punchline":"Put it on my bill","id":30},{"type":"general","setup":"You see, mountains aren't just funny.","punchline":"They are hill areas.","id":408},{"type":"general","setup":"What did the pirate say on his 80th birthday?","punchline":"Aye Matey!","id":183}]
//
// https://official-joke-api.appspot.com/jokes/programming/random
// https://official-joke-api.appspot.com/jokes/programming/ten
// Types: programming, general, knock-knock
//
// Get a joke by id:
// /jokes/:id
