var procspawn = require("./..");

procspawn("echo", ["hello world"]);
procspawn("ls", "-la");