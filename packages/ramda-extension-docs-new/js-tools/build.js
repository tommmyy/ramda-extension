const { spawnSync } = require('child_process');
spawnSync('yarn', ['build:cjs'], {
	cwd: '../../ramda-extension',
	stdio: 'inherit',
});
spawnSync('yarn');
spawnSync('jsdoc', ['--template', '.', '../../ramda-extension/lib'], {
	stdio: 'inherit',
});

console.log('Done.');
