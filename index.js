const spawn = require("child_process").spawn;

module.exports = function(cmd, args, options) {
	options = options || {};
	if (typeof options.stdio === "undefined") options.stdio = "inherit";
	if (typeof args === "string") args = args.split(" ");
	
	return spawn(cmd, args, options);
};