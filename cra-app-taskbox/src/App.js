import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import InboxScreen from "./components/InboxScreen";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
      <p>Get ready to learn react.</p>
    </Provider>
  );
}

export default App;
