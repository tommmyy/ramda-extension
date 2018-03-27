const fs = require('fs');
const path = require('path');

const { defaultTo, map, pipe, prop } = require('ramda');
const handlebars = require('handlebars');
const pck = require('../package.json');

const version = pck.devDependencies.ramda;
const versionExtension = pck.devDependencies['ramda-extension'];

const templateFile = path.resolve(__dirname, '../repl/index.html.handlebars');

const templateContent = fs.readFileSync(templateFile, { encoding: 'utf8' });

const context = {
	version,
	versionExtension,
};

const outputContent = handlebars.compile(templateContent)(context);

const outputFile = path.resolve(__dirname, '../repl/index.html');

module.exports = () => fs.writeFileSync(outputFile, outputContent, { encoding: 'utf8' });
