const fs = require('fs');
const path = require('path');

const { defaultTo, map, pipe, prop } = require('ramda');
const handlebars = require('handlebars');
const pck = require('../package.json');

const version = require('../package.json').devDependencies.ramda;
const versionExtension = require('../../ramda-extension/package.json').version;

const templateFile = path.resolve(__dirname, '../repl/index.html.handlebars');

const templateContent = fs.readFileSync(templateFile, { encoding: 'utf8' });

const context = {
	version,
	versionExtension,
};

const outputContent = handlebars.compile(templateContent)(context);

const outputFile = path.resolve(__dirname, '../repl/index.html');

module.exports = () => {
	console.log('Builing REPL...');

	fs.writeFileSync(outputFile, outputContent, { encoding: 'utf8' });
};
