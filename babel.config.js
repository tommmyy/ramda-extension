const addImportExtension = () => {
	const addExtension = (nodePath) => {
		const source = nodePath.node.source;

		if (
			source &&
			/^\.\.?\//.test(source.value) &&
			!/\.[cm]?js$/.test(source.value)
		) {
			source.value = `${source.value}.js`;
		}
	};

	return {
		visitor: {
			ImportDeclaration: addExtension,
			ExportNamedDeclaration: addExtension,
			ExportAllDeclaration: addExtension,
		},
	};
};

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
		plugins:
			env === 'es'
				? ['babel-plugin-annotate-pure-calls', addImportExtension]
				: [],
	};
};
