/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';

function copyFiles() {
	return new Promise((resolve) => fse.copyFile(
		path.resolve(__dirname, '../README.md'),
		path.resolve(__dirname, '../build/README.md'),
		(err) => {
			if (err) throw new Error(err);
			console.log('Copied README file.');

			resolve();
		}
	));
}

function createPackageFile() {
	return new Promise((resolve) => {
		fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			resolve(data);
		});
	})
	.then((data) => JSON.parse(data))
	.then((packageData) => {
		const {
			author,
			version,
			keywords,
			description,
			repository,
			license,
			peerDependencies,
			dependencies,
			publishConfig,
		} = packageData;

		const minimalPackage = {
			name: 'ramda-extension',
			author,
			version,
			description,
			keywords,
			main: './index.js',
			repository,
			license,
			publishConfig,
			peerDependencies,
			dependencies,
		};

		return new Promise((resolve) => {
			const buildPath = path.resolve(__dirname, '../build/package.json');
			const data = JSON.stringify(minimalPackage, null, 2);
			fse.writeFile(buildPath, data, (err) => {
				if (err) throw (err);
				console.log(`Created package.json in ${buildPath}`);
				resolve();
			});
		});
	});
}

async function copy() {
	await createPackageFile();
	await copyFiles();
}
/* eslint-enable no-console */

export default copy;

