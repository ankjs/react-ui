import { nodeResolve } from "@rollup/plugin-node-resolve";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
//import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist", 
      format: "cjs",
      entryFileNames: "index.js",
      sourcemap: true,
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "index.esm.js",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), 
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        lib: ["es5", "es6", "dom"],
        target: "es5",
      },

    }),
  ],
  external: ["react", "react-dom"],
};



