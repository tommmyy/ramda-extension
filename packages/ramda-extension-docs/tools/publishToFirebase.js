const { spawnSync } = require('child_process');

spawnSync('firebase', ['deploy'], { stdio: 'inherit' });
