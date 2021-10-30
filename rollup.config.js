import typescript from '@rollup/plugin-typescript';
import pkg from "./package.json";

const extensions = [".js", ".ts"];
const input = "src/index.ts";

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins: [typescript()]
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [typescript()]
  }
];
