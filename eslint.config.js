import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"]
    ,
     plugins: { React,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
   }
]);
