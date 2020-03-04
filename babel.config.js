module.exports = (api) => {
	const env = api.env();

	return {
		presets: [
			[
				'babel-preset-react-union',
				{
					test:
						['commonjs', 'test'].includes(env) ||
						process.env.NODE_ENV === 'test',
					loose: true,
					library: true,
					universal: false,
				},
			],
		],
		plugins: [
			...(api.env('es') ? ['babel-plugin-annotate-pure-calls'] : []),
		],
	};
};
