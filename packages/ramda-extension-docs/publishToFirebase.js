
const fs = require('fs-extra');
const R = require('ramda')
const { spawnSync } = require('child_process');

const filter = R.o(R.not, R.anyPass([
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
]));

fs.removeSync('./public');
fs.mkdirpSync('./public');
fs.copySync('./index.html', './public/index.html', { filter });
fs.copySync('./docs', './public/docs', { filter });
fs.copySync('./repl', './public/repl', { filter });

spawnSync('firebase', ['deploy'], { stdio: 'inherit'})
