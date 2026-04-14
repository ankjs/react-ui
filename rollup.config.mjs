
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";



export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "index.cjs",
      sourcemap: true,
      exports: "named",
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
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      // আলাদা করে compilerOptions এখানে না দিয়ে tsconfig থেকে নেওয়াই ভালো
    }),
  ],
  external: ["react", "react-dom", "react/jsx-runtime"], 
};


/*
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
        jsx: "react-jsx", // এটি নিশ্চিত করুন
      },

    }),
  ],

*/