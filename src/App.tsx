import React from "react";
import * as L from "react-isloading";

const loaders = [
  {
    name: "L1",
    Loader: L.L1,
  },
];

const codeStyle = {
  backgroundColor: "#f8f8f8",
  borderRadius: "0.25rem",
  // padding: "0.5rem",
  // margin: "0.5rem",
  overflow: "auto",
  fontSize: "0.8rem",
  fontFamily: "monospace",
  width: "100%",
};

const App = () => {
  const [name, setName] = React.useState("L1");

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <code
          style={{
            ...codeStyle,
          }}
        >{`import { ${name} } from "react-isloading";`}</code>
        <pre
          style={{
            ...codeStyle,
          }}
        >
          <code>
            {`
        <${name} style={{
                  height: "15rem",
                  width: "15rem",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
             }}
         />`}
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
