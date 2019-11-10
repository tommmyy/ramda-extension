const fs = require('fs-extra');
const R = require('ramda');

const p = require('./utils/p');

const buildLess = require('./buildLess');
const buildRamda = require('./buildRamda');
const buildJsdoc = require('./buildJsdoc');
const buildRepl = require('./buildRepl');

const filter = R.o(
	R.not,
	R.anyPass([
		R.endsWith('handlebars'),
		R.endsWith('examples'),
		R.endsWith('.babelrc'),
		R.endsWith('.gitignore'),
		R.endsWith('create-examples.js'),
		R.endsWith('handlebars'),
		R.endsWith('index.pug'),
		R.endsWith('npm-shrinkwrap.json'),
		R.endsWith('package.json'),
		R.endsWith('README.md'),
	])
);

console.log('Builing Website...');

fs.removeSync(p('../public'));
fs.mkdirpSync(p('../public'));

buildRamda();
buildLess();
buildJsdoc();
buildRepl();

fs.copySync(p('../index.html'), p('../public/index.html'), { filter });
fs.copySync(p('../fonts'), p('../public/docs/css/fonts'));
fs.copySync(p('../docs'), p('../public/docs'), { filter });
fs.copySync(p('../repl'), p('../public/repl'), { filter });

console.log('Done.');
