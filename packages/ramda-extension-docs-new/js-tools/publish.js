const R = require('ramda');
const fs = require('fs-extra');

const { defaultTo, map, pipe, prop } = R;

const hljs = require('highlight.js');
const helper = require('jsdoc/util/templateHelper');
const marked = require('marked');

const prettifyCode = R.pipe(
	R.join('\n'),
	R.split('\n'),
	R.map(R.trim),
	R.join('\n'),
	R.replace(/^[ ]{5}/gm, ''),
	(s) => hljs.highlight('javascript', s).value
);

const prettifySig = R.pipe(
	R.replace(/[.][.][.]/g, '\u2026'),
	R.replace(/->/g, '\u2192')
);

//  simplifySee :: Array String -> Array String
//
//  Handles any combination of comma-separated and multi-line @see annotations.
const simplifySee = R.pipe(
	R.chain(R.split(/\s*,\s*/)),
	R.map(R.replace(/^R[.]/, ''))
);

const titleFilter = pipe(
	R.propEq('title'),
	R.filter
);

const valueProp = R.chain(prop('value'));

const simplifyData = R.applySpec({
	aka: pipe(
		prop('tags'),
		titleFilter('aka'),
		valueProp,
		R.chain(R.split(/,\s*/))
	),
	category: pipe(
		prop('tags'),
		titleFilter('category'),
		valueProp,
		R.head,
		defaultTo('')
	),
	deprecated: pipe(
		prop('deprecated'),
		defaultTo('')
	),
	description: pipe(
		prop('description'),
		R.defaultTo(''),
		marked
	),
	example: pipe(
		prop('examples'),
		R.defaultTo(''),
		prettifyCode
	),
	name: pipe(
		prop('name'),
		defaultTo('')
	),
	params: pipe(
		prop('params'),
		defaultTo([]),
		map(
			R.applySpec({
				description: pipe(
					prop('description'),
					defaultTo(''),
					marked
				),
				name: pipe(
					prop('name'),
					defaultTo('')
				),
				type: pipe(
					R.path(['type', 'names', 0]),
					defaultTo('')
				),
			})
		)
	),
	returns: {
		description: pipe(
			R.path(['returns', 0, 'description']),
			defaultTo('')
		),
		type: pipe(
			R.path(['returns', 0, 'type', 'names', 0]),
			defaultTo('')
		),
	},
	see: pipe(
		prop('see'),
		defaultTo(''),
		simplifySee
	),
	sigs: pipe(
		prop('tags'),
		titleFilter('sig'),
		valueProp,
		map(prettifySig)
	),
	since: pipe(
		prop('since'),
		defaultTo('')
	),
	typedefns: pipe(
		prop('tags'),
		titleFilter('typedefn'),
		valueProp,
		map(prettifySig)
	),
});

exports.publish = (data) => {
	const docs = helper
		.prune(data)()
		.order('name, version, since')
		.filter({ kind: ['function', 'constant'] })
		.get()
		.filter((x) => x.access !== 'private')
		.map(simplifyData);
	fs.writeJsonSync('../public/ramda-extension.json', docs);
};
