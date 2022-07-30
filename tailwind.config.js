/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        reveal: "reveal 0.5s ease-in-out forwards",
        revealPage: "revealPage 0.3s ease-in-out forwards",
        revealLogo: "revealLogo 0.3s ease-in-out forwards",
        hide: "hide 0.5s ease-in-out forwards",
        bounce2: "bounce2 .75s infinite ",
      },
      keyframes: {
        // bounce2: {
        //   "30%": {
        //     transform: "translate(0, 100%) scaleY(0.7)",
        //   },
        // },
        reveal: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -30%)",
          },

          "70%": {
            transform: "translate(-50%, -55%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -50%)",
          },
        },
        revealPage: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        // revealLogo: {
        //   "0%": {
        //     opacity: 0,
        //     transform: "translate(-5%, 0)",
        //   },
        //   "100%": {
        //     opacity: 1,
        //     transform: "translate(0, 0)",
        //   },
        // },
        hide: {
          "0%": {
            opacity: 1,
            transform: "translate(-50%, -50%)",
          },

          "70%": {
            opacity: 1,
            transform: "translate(-50%, -55%)",
          },
          "99%": {
            opacity: 0,
            transform: "translate(-50%, -30%)",
          },
          "100%": {
            transform: "translate(-50%, 70000%)",
          },
        },
      },
    },
  },
  plugins: [],
};
