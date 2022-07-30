import React from "react";
import toast, { Toaster } from "react-hot-toast";
import * as L from "react-isloading";

const loaders = [
  {
    name: "L1",
    Loader: L.L1,
  },
  {
    name: "L2",
    Loader: L.L2,
  },
  {
    name: "L3",
    Loader: L.L3,
  },
  {
    name: "L4",
    Loader: L.L4,
  },
  {
    name: "L5",
    Loader: L.L5,
  },
  {
    name: "L6",
    Loader: L.L6,
  },
  {
    name: "L7",
    Loader: L.L7,
  },
  {
    name: "L8",
    Loader: L.L8,
  },
  {
    name: "L9",
    Loader: L.L9,
  },
  {
    name: "L10",
    Loader: L.L10,
  },
  {
    name: "L11",
    Loader: L.L11,
  },
  {
    name: "L12",
    Loader: L.L12,
  },
  {
    name: "L13",
    Loader: L.L13,
  },
  {
    name: "L14",
    Loader: L.L14,
  },
  {
    name: "L15",
    Loader: L.L15,
  },
  {
    name: "L16",
    Loader: L.L16,
  },
  {
    name: "L17",
    Loader: L.L17,
  },
  {
    name: "L18",
    Loader: L.L18,
  },
  {
    name: "L19",
    Loader: L.L19,
  },
  {
    name: "L20",
    Loader: L.L20,
  },
  {
    name: "L21",
    Loader: L.L21,
  },
  {
    name: "L22",
    Loader: L.L22,
  },
  {
    name: "L23",
    Loader: L.L23,
  },
  {
    name: "L24",
    Loader: L.L24,
  },
  {
    name: "L25",
    Loader: L.L25,
  },
  {
    name: "L26",
    Loader: L.L26,
  },
  {
    name: "L27",
    Loader: L.L27,
  },
  {
    name: "L28",
    Loader: L.L28,
  },
  {
    name: "L29",
    Loader: L.L29,
  },
  {
    name: "L30",
    Loader: L.L30,
  },
  {
    name: "L31",
    Loader: L.L31,
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
