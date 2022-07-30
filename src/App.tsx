import React from "react";
import toast, { Toaster } from "react-hot-toast";
import * as L from "react-isloading";

const loaders = [
  {
    name: "L1",
    Loader: L.L1,
  },
];

const App = () => {
  const [name, setName] = React.useState("L1");
  const [isCodeVisible, setCodeVisible] = React.useState(false);

  return (
    <div className="min-h-screen w-screen">
      <Toaster />
      <div
        className={` flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-400 rounded-2xl p-8 border border-black font-bold text-lg gap-4 ${
          isCodeVisible ? "animate-reveal" : "animate-hide"
        }`}
      >
        <button
          className="absolute top-2 right-6 text-white hover:bg-[#ffffff33]  transition-all px-2 rounded-full"
          onClick={() => setCodeVisible(false)}
        >
          x
        </button>
        <code
          className=" hover:bg-slate-300 p-4 rounded-2xl text-white w-full transition-all cursor-pointer"
          onClick={e => {
            navigator.clipboard.writeText(
              `import { ${name} } from "react-isloading";`
            );
            toast("Copied to Clipboard!.");
          }}
        >{`import { ${name} } from "react-isloading";`}</code>
        <pre
          className=" hover:bg-slate-300 p-4 rounded-2xl text-white w-full transition-all cursor-pointer"
          onClick={e => {
            navigator.clipboard.writeText(
              `      <${name}
        style={{
          height: "15rem",
          width: "15rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />`
            );
            toast("Copied to Clipboard!.");
          }}
        >
          <code>
            {`      <${name}
        style={{
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
      <div className="grid grid-cols-9 p-8 gap-4">
        {loaders.map(({ name, Loader }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-300 transition-all rounded-xl"
            onClick={() => {
              setName(name);
              setCodeVisible(true);
            }}
          >
            <Loader
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
