//rollup.config.mjs
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
      banner: "'use client';", // বিল্ড ফাইলের একদম উপরে এটি যোগ করবে
      exports: "named",
      sourcemap: true,
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "index.esm.js",
      banner: "'use client';",
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
  external: ["react", "react-dom", 'react-router-dom', "react/jsx-runtime"],
  onwarn(warning, warn) {
    // "use client" সংক্রান্ত ওয়ার্নিং ইগনোর করার জন্য
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) {
      return;
    }
    warn(warning);
  },
};










/*


output: [
  {
    dir: "dist",
    format: "cjs",
    entryFileNames: "index.cjs",
    sourcemap: false, // এখানে false করে দিন
  },
  {
    dir: "dist",
    format: "esm",
    entryFileNames: "index.esm.js",
    sourcemap: false, // এখানেও false করে দিন
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
        jsx: "react-jsx", // এটি নিশ্চিত করুন
      },

    }),
  ],

*/