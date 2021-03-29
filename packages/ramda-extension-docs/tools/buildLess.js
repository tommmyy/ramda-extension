const { spawnSync } = require('child_process');
const path = require('path');
const p = require('./utils/p');

module.exports = () => {
	console.log('Builing CSS...');

	spawnSync(
		'lessc',
		[
			'--autoprefix',
			'--clean-css',
			'./less/ramda.less',
			'./docs/css/style.css',
		],
		{ cwd: p('../'), stdio: 'inherit' }
	);
};
