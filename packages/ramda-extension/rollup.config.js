import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV;
const banner = `
//  Ramda-extension v${require('./package.json').version}
//  https://github.com/tommmyy/ramda-extension
//  (c) 2016-${new Date().getFullYear()}
//  Ramda-extension may be freely distributed under the Apache-2.0 license.
`;

const config = {
	input: 'src/index.js',
	external: ['ramda'],
	plugins: [],
};

const globals = {
	ramda: 'R',
};

if (env === 'es' || env === 'cjs') {
	config.output = {
		format: env,
		indent: false,
		banner,
		globals,
	};
	config.plugins.push(
		nodeResolve({
			jsnext: true,
		}),
		babel()
	);
}

if (env === 'development' || env === 'production') {
	config.output = {
		format: 'umd',
		name: 'R_',
		indent: false,
		banner,
		globals,
	};

	config.plugins.push(
		nodeResolve({
			jsnext: true,
		}),
		babel({
			exclude: '**/node_modules/**',
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify(env),
		})
	);
}

config.plugins.push(commonjs());

if (env === 'production') {
	config.plugins.push(
		terser({
			compress: {
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				warnings: false,
			},
		})
	);
}

export default config;

