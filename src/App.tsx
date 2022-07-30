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
  {
    name: "L32",
    Loader: L.L32,
  },
  {
    name: "L33",
    Loader: L.L33,
  },
  {
    name: "L34",
    Loader: L.L34,
  },
  {
    name: "L35",
    Loader: L.L35,
  },
  {
    name: "L36",
    Loader: L.L36,
  },
  {
    name: "L37",
    Loader: L.L37,
  },
  {
    name: "L38",
    Loader: L.L38,
  },
  {
    name: "L39",
    Loader: L.L39,
  },
  {
    name: "L40",
    Loader: L.L40,
  },
  {
    name: "L41",
    Loader: L.L41,
  },
  {
    name: "L42",
    Loader: L.L42,
  },
  {
    name: "L43",
    Loader: L.L43,
  },
  {
    name: "L44",
    Loader: L.L44,
  },
  {
    name: "L45",
    Loader: L.L45,
  },
  {
    name: "L46",
    Loader: L.L46,
  },
  {
    name: "L47",
    Loader: L.L47,
  },
  {
    name: "L48",
    Loader: L.L48,
  },
  {
    name: "L49",
    Loader: L.L49,
  },
  {
    name: "L50",
    Loader: L.L50,
  },
  {
    name: "L51",
    Loader: L.L51,
  },
  {
    name: "L52",
    Loader: L.L52,
  },
  {
    name: "L53",
    Loader: L.L53,
  },
  {
    name: "L54",
    Loader: L.L54,
  },
  {
    name: "L55",
    Loader: L.L55,
  },
  {
    name: "L56",
    Loader: L.L56,
  },
  {
    name: "L57",
    Loader: L.L57,
  },
  {
    name: "L58",
    Loader: L.L58,
  },
  {
    name: "L59",
    Loader: L.L59,
  },
  {
    name: "L60",
    Loader: L.L60,
  },
  {
    name: "L61",
    Loader: L.L61,
  },
  {
    name: "L62",
    Loader: L.L62,
  },
  {
    name: "L63",
    Loader: L.L63,
  },
  {
    name: "L64",
    Loader: L.L64,
  },
  {
    name: "L65",
    Loader: L.L65,
  },
  {
    name: "L66",
    Loader: L.L66,
  },
  {
    name: "L67",
    Loader: L.L67,
  },
  {
    name: "L68",
    Loader: L.L68,
  },
  {
    name: "L69",
    Loader: L.L69,
  },
  {
    name: "L70",
    Loader: L.L70,
  },
  {
    name: "L71",
    Loader: L.L71,
  },
  {
    name: "L72",
    Loader: L.L72,
  },
  {
    name: "L73",
    Loader: L.L73,
  },
  {
    name: "L74",
    Loader: L.L74,
  },
  {
    name: "L75",
    Loader: L.L75,
  },
  {
    name: "L76",
    Loader: L.L76,
  },
  {
    name: "L77",
    Loader: L.L77,
  },
  {
    name: "L78",
    Loader: L.L78,
  },
  {
    name: "L79",
    Loader: L.L79,
  },
  {
    name: "L80",
    Loader: L.L80,
  },
  {
    name: "L81",
    Loader: L.L81,
  },
  {
    name: "L82",
    Loader: L.L82,
  },
  {
    name: "L83",
    Loader: L.L83,
  },
  {
    name: "L84",
    Loader: L.L84,
  },
  {
    name: "L85",
    Loader: L.L85,
  },
  {
    name: "L86",
    Loader: L.L86,
  },
  {
    name: "L87",
    Loader: L.L87,
  },
  {
    name: "L88",
    Loader: L.L88,
  },
  {
    name: "L89",
    Loader: L.L89,
  },
  {
    name: "L90",
    Loader: L.L90,
  },
  {
    name: "L91",
    Loader: L.L91,
  },
  {
    name: "L92",
    Loader: L.L92,
  },
  {
    name: "L93",
    Loader: L.L93,
  },
  {
    name: "L94",
    Loader: L.L94,
  },
  {
    name: "L95",
    Loader: L.L95,
  },
  {
    name: "L96",
    Loader: L.L96,
  },
  {
    name: "L97",
    Loader: L.L97,
  },
  {
    name: "L98",
    Loader: L.L98,
  },
  {
    name: "L99",
    Loader: L.L99,
  },
  {
    name: "L100",
    Loader: L.L100,
  },
];

const pages: number[] = [];

for (let index = 0; index < Math.ceil(loaders.length / 15); index++) {
  pages.push(index + 1);
}

const App = () => {
  const [name, setName] = React.useState("L1");
  const [isCodeVisible, setCodeVisible] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1 * 15);

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
      <div className="grid grid-cols-3 p-8 gap-4">
        {loaders.map(({ name, Loader }, i) => {
          return (
            i >= currentPage - 15 &&
            i < currentPage && (
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
            )
          );
        })}
      </div>
      <div>
        {pages.map((page, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-300 transition-all rounded-xl"
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
