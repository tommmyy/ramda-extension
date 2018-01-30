const fs = require('fs');
const path = require('path');

const R = require('ramda');

const { defaultTo, map, pipe, prop } = R

const handlebars = require('handlebars');
const version = require('./package.json').devDependencies.ramda
const versionExtension = require('./package.json').devDependencies['ramda-extension']


const templateFile = path.resolve('./repl/index.html.handlebars')

const templateContent = fs.readFileSync(templateFile, { encoding: 'utf8' })

const context = {
  version: version,
  versionExtension: versionExtension,
}

const outputContent = handlebars.compile(templateContent)(context)

const outputFile = path.resolve('./repl/index.html')

fs.writeFileSync(outputFile, outputContent, { encoding: 'utf8' });
