import React from "react";
import * as L from "react-isloading";

const loaders = [
  {
    name: "L1",
    Loader: L.L1,
  },
];
const App = () => {
  const [name, setName] = React.useState("L1");

  return (
    <div className="App">
      <div>
        <code>{`import { ${name} } from "react-isloading";`}</code>
        <pre>
          <code>
            {`
                <${name} style={{
                       height: "15rem",
                       width: "15rem",
                       position: "absolute",
                       top: "50%",
                       left: "50%",
                       transform: "translate(-50%, -50%)",
                 }}/>`}
          </code>
        </pre>
      </div>
      {loaders.map(({ name, Loader }, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem",
            position: "relative",
          }}
          onClick={() => setName(name)}
        >
          <Loader
            style={{
              height: "15rem",
              width: "15rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
