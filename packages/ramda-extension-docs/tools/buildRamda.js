const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const p = require('./utils/p');

module.exports = () => {
	console.log('Builing Ramda...');

	spawnSync('yarn', ['build'], {
		cwd: p('../../ramda-extension'),
		stdio: 'inherit',
	});

	if (fs.pathExistsSync(p('../docs/dist'))) {
		fs.removeSync(p('../docs/dist'));
	}

	fs.copySync(p('../../../node_modules/ramda/dist'), p('../docs/dist'));
	fs.copySync(p('../../ramda-extension/dist'), p('../docs/dist'));
};
