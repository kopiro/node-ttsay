var spawner = require('child_process').spawn;
var child = null;

// Set default speaker
var sys_speaker = null;
switch (process.platform) {
	case 'darwin': sys_speaker = 'say'; break;
}

module.exports = function(text, opt, callback){
	opt = opt || {};

	var c = spawner(sys_speaker, [ text ]);

	c.stdin.setEncoding('ascii');
	c.stderr.setEncoding('ascii');

	c.addListener('exit', function (code, signal) {
		if (code===null || signal!==null) {
			throw new Error("Say: can't speak");
		}

		if (typeof callback==='function') callback();
	});
}