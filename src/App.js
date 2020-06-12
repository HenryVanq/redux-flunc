import React from "react";
import "./App.css";
import Posts from "../src/components/Posts";
import Postform from "../src/components/Postform";

import { Provider } from "react-redux";
import store from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
