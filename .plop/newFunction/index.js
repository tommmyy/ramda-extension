const path = require('path');
const { rootDir } = require('../utils');

module.exports = {
	description: 'New function',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'Name of the function',
		},
		{
			type: 'list',
			name: 'category',
			message: 'Category of the function',
			choices: [
				'Function',
				'Object',
				'Type',
				'List',
				'String',
				'Logic',
				'Relation',
				'Math',
				'Debugging',
			],
		},
	],
	actions: (/* input */) => [
		{
			type: 'add',
			path: path.join(
				rootDir,
				'packages/ramda-extension/src/{{camelCase name}}.js'
			),
			templateFile: path.join(__dirname, './newFunction.js.hbs'),
		},
		{
			type: 'add',
			path: path.join(
				rootDir,
				'packages/ramda-extension/src/__tests__/{{camelCase name}}-test.js'
			),
			templateFile: path.join(__dirname, './test.js.hbs'),
		},
		{
			type: 'append',
			path: path.join(
				rootDir,
				'packages/ramda-extension/src/index.js'
			),
			templateFile: path.join(__dirname, './root.js.hbs'),
			separator: '',
			pattern: /\n$/gi,
		},
	],
};
