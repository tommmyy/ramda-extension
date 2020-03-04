import replace from "@rollup/plugin-replace";
import autoExternal from "rollup-plugin-auto-external";
import path from "path";
import cjsPlugin from "@rollup/plugin-commonjs";
import { terser as terserPlugin } from "rollup-plugin-terser";
import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import babelPlugin from "rollup-plugin-babel";

const cjs = cjsPlugin({
	include: /node_modules/
});

const terser = terserPlugin({
	compress: {
		pure_getters: true,
		unsafe: true,
		unsafe_comps: true,
		warnings: false
	}
});

const nodeResolve = nodeResolvePlugin();

const babel = envName =>
	babelPlugin({
		runtimeHelpers: true,
		envName,
		rootMode: "upward"
	});

const plugins = { cjs, terser, nodeResolve, babel };

const PACKAGE_ROOT_PATH = __dirname;
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, "src/index.js");

const globals = {
	ramda: "R"
};

const globalName = "R_";
const fileName = "ramda-extension";

export default [
	// UMD Development
	{
		input: INPUT_FILE,
		output: {
			file: path.join(PACKAGE_ROOT_PATH, "dist", `${fileName}.js`),
			format: "umd",
			name: globalName,
			indent: false,
			globals
		},
		external: x => x.includes("ramda"),
		plugins: [
			// Bundle all in one file for umd distribution for `validarium` package
			replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
			autoExternal(),
			plugins.nodeResolve,
			plugins.babel("umd"),
			plugins.cjs
		]
	},

	// UMD Production
	{
		input: INPUT_FILE,
		external: x => x.includes("ramda"),
		output: {
			file: path.join(PACKAGE_ROOT_PATH, "dist", `${fileName}.min.js`),
			format: "umd",
			name: globalName,
			indent: false,
			globals
		},
		plugins: [
			// Bundle all in one file for umd distribution for `validarium` package
			autoExternal(),
			replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
			plugins.nodeResolve,
			plugins.babel("umd"),
			plugins.cjs,
			plugins.terser
		]
	}
];
