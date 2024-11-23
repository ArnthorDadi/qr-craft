import plugin from "tailwindcss/plugin";
import {type Config} from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {},
  },
  plugins: [
    plugin(function spicyGradients({ addUtilities }) {
      addUtilities({
        ".bg-none": {"background-image": "none"},
        ".bg-gradient-to-t": {
          "background-image":
              "linear-gradient(to top, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to top, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-b": {
          "background-image":
              "linear-gradient(to bottom, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to bottom, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-l": {
          "background-image":
              "linear-gradient(to left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to left, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to left, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-r": {
          "background-image":
              "linear-gradient(to right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to right, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to right, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-tl": {
          "background-image":
              "linear-gradient(to top left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top left, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to top left, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-tr": {
          "background-image":
              "linear-gradient(to top right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top right, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to top right, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-bl": {
          "background-image":
              "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom left, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to bottom left, var(--tw-gradient-stops))",
              },
        },
        ".bg-gradient-to-br": {
          "background-image":
              "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom right, black, white))":
              {
                "background-image":
                    "linear-gradient(in oklch to bottom right, var(--tw-gradient-stops))",
              },
        },
      });
    }),
  ],
} satisfies Config;
