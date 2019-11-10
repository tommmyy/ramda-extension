module.exports = (api) => {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: ['babel-preset-react-union'],
		plugins: [
			...(api.env('commonjs') ?
				[
					[
						'@babel/plugin-transform-modules-commonjs',
						{
							loose: true,
						},
					],
				  ] :
				[]),
			...(api.env('es') ? ['babel-plugin-annotate-pure-calls'] : []),
		],
	};
};
