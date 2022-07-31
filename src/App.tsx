import React from "react";
import toast, { Toaster } from "react-hot-toast";
import loaders from "./loaders";

const pages: number[] = [];

for (let index = 0; index < Math.ceil(loaders.length / 15); index++) {
  pages.push(index + 1);
}

const App = () => {
  const [name, setName] = React.useState("L1");
  const [isCodeVisible, setCodeVisible] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1 * 15);

  return (
    <div className="min-h-screen w-screen bg-slate-100 pb-32">
      <Toaster />
      <h1 className="w-full text-center p-8 text-3xl font-bold">
        react-isloading
      </h1>
      <p className="w-full text-center text-xl font-bold">
        Beautiful & Easy to add Loaders for React
      </p>
      <div
        className={` flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#011627] rounded-2xl p-8 border border-black font-bold text-lg gap-4 ${
          isCodeVisible ? "animate-reveal" : "animate-hide"
        }`}
      >
        <button
          className="absolute top-1 right-2 text-white hover:bg-[#ffffff33]  transition-all px-3 rounded-full pb-1"
          onClick={() => setCodeVisible(false)}
        >
          x
        </button>
        <h2 className="bg-white text-xl p-2">First install the package</h2>
        <code
          className=" hover:bg-slate-300 p-4 rounded-2xl text-white hover:text-[#011627] w-full transition-all cursor-pointer"
          onClick={e => {
            navigator.clipboard.writeText(
              `import { ${name} } from "react-isloading";`
            );
            toast("Copied to Clipboard!.");
          }}
        >
          {">"} npm i react-isloading
        </code>
        <h2 className="bg-white text-xl p-2">
          then import the desired loader/s
        </h2>
        <code
          className=" hover:bg-slate-300 p-4 rounded-2xl text-white hover:text-[#011627]  w-full transition-all cursor-pointer"
          onClick={e => {
            navigator.clipboard.writeText(
              `import { ${name} } from "react-isloading";`
            );
            toast("Copied to Clipboard!.");
          }}
        >{`import { ${name} } from "react-isloading";`}</code>
        <h2 className="bg-white text-xl p-2">
          Finally add the loader/s to your component
        </h2>
        <pre
          className=" hover:bg-slate-300 p-4 rounded-2xl text-white hover:text-[#011627]  w-full transition-all cursor-pointer"
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
      <div className="grid grid-cols-3 p-8 gap-4">
        {loaders.map(({ name, Loader }, i) => {
          return (
            i >= currentPage - 15 &&
            i < currentPage && (
              <div
                key={i}
                className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-all rounded-xl animate-revealPage"
                onClick={() => {
                  setName(name);
                  setCodeVisible(true);
                }}
              >
                <Loader
                  style={{
                    height: "10rem",
                    width: "10rem",
                  }}
                />
              </div>
            )
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-8 p-4 text-xl font-bold fixed bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl">
        {pages.map((page, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-all rounded-xl p-2 px-4 hover:text-slate-600 ${
                currentPage / 15 === page ? "bg-slate-200" : ""
              }`}
              onClick={() => {
                setCurrentPage(page * 15);
              }}
            >
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
