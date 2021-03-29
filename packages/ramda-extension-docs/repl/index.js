document.addEventListener(
	'DOMContentLoaded',
	function () {
		// Regex for matching version strings
		// Example match: "0.21.123"
		var rx = /^\d+\.\d+(\.\d+)?$/;

		// :: String, String -> String
		var grabVersion = function (libType) {
			function toVersion(acc, pair) {
				var splitPair = pair.split('=');
				return splitPair[0] === libType && rx.test(splitPair[1])
					? splitPair[1]
					: acc;
			}
			return location.search.substr(1).split('&').reduce(toVersion, 'latest');
		};

		var ramdaUrl =
			'//cdn.jsdelivr.net/npm/ramda@' + grabVersion('v') + '/dist/ramda.min.js';
		var extensionUrl =
			'//cdn.jsdelivr.net/npm/ramda-extension@' +
			grabVersion('ve') +
			'/dist/ramda-extension.min.js';

		ramdaRepl(document.querySelector('.ramda-repl-target'), {
			apiUrl:
				'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDhbAvT5JqkxFPkoeezJp19-S_mAJudxyk',

			// If unset, initialValue will use the value or textcontent of the
			// target element.
			initialValue: URI.decode(window.location.hash).substring(2),

			// Called with the pre-compiled content
			onChange: function (code) {
				window.location.hash = '?' + URI.encode(code);
			},

			// The following config defines scripts that will be dynamically
			// loaded upon creating the REPL. Each has the following properties:
			//
			// src      - The source of the script, a URL
			// global   - (Optional) a name of a global that the script introduces
			// exposeAs - (Optional) a name that can alias the global
			// expose   - (Optional) a list of methods to expose globally

			// Required.
			// As ramda may be a dependency for other scripts, it will
			// be intentionally loaded before any other script.
			ramdaScript: {
				global: 'R',
				src: ramdaUrl,
			},

			returnUrl: 'http://ramdajs.com/repl/',

			// Optional.
			// Here we can declare a list of libraries that we wish to have
			// loaded and exposed in the repl.
			scripts: [
				{
					exposeAs: 'S',
					global: 'sanctuary',
					src: '//wzrd.in/standalone/sanctuary@latest',
				},
				{
					expose: [
						'Either',
						'Future',
						'Identity',
						'IO',
						'lift2',
						'lift3',
						'Maybe',
						'Reader',
						'Tuple',
					],
					global: 'ramdaFantasy',
					src: '//wzrd.in/standalone/ramda-fantasy@latest',
				},
				{
					src: extensionUrl,
					global: 'ramda-extension',
					exposeAs: 'R_',
				},
			],
		});
	},
	false
);
