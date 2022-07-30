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
    <div className="min-h-screen w-screen">
      <div className=" flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-400 rounded-2xl p-8 border border-black font-bold text-lg gap-4">
        <code className=" hover:bg-slate-300 p-4 rounded-2xl text-white w-full transition-all cursor-pointer">{`import { ${name} } from "react-isloading";`}</code>
        <pre className=" hover:bg-slate-300 p-4 rounded-2xl text-white w-full transition-all cursor-pointer">
          <code>
            {`<${name} style={{
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
      <div className="grid grid-cols-10">
        {loaders.map(({ name, Loader }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center"
            onClick={() => setName(name)}
          >
            <Loader
              style={{
                height: "100%",
                width: "100%",
                // position: "absolute",
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
