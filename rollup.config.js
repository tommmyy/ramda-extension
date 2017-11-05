import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const banner = `
//  Ramda-extension v${require('./package.json').version}
//  https://github.com/tommmyy/ramda-extension
//  (c) 2017-${new Date().getFullYear()}
//  Ramda-extension may be freely distributed under the MIT license.
`;

const config = {
	input: 'source/index.js',
	output: {
		format: 'umd',
		name: 'R_',
		exports: 'named',
	},
	globals: {
		ramda: 'R',
	},
	banner,
	plugins: [
		resolve({
			customResolveOptions: {
				moduleDirectory: 'node_modules',
			},
		}),
		babel({
			include: 'source/**',
		}),
	],
	external: ['ramda'],
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		uglify({
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
