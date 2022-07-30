import React from "react";
import { SayHello } from "react-isloading";

function App() {
  return (
    <div className="App">
      <h1>{SayHello({ name: "dude" })}</h1>
    </div>
  );
}

export default App;
