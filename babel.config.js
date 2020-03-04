module.exports = api => {
	const env = api.env();

	const ramdaSrc = env === "es" ? "es" : "src";

	return {
		presets: [
			[
				"babel-preset-react-union",
				{
					test: env === "commonjs",
					loose: true,
					library: true,
					universal: false
				}
			]
		],
		plugins: [
			...(api.env("es") ? ["babel-plugin-annotate-pure-calls"] : [])
		]
	};
};
