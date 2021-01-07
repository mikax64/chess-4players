import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";
import ChessBoard from "./components/ChessBoard";
import { sendMessage } from "./api";

function App() {
  const [time, setTime] = useState(null);
  console.log("RENDER APP");

  return (
    <Provider store={store}>
      <div className="App">
        <button onClick={() => sendMessage("COOOL")}>SEND </button>
        <ChessBoard />
      </div>
    </Provider>
  );
}

export default App;
