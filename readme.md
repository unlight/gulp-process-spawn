## proc-spawn
Wrapper around node's child_process.spawn


### INSTALL
```sh
npm i proc-spawn --save-dev
```


### USAGE
```js
var procSpawn = require("proc-spawn");
procSpawn("ls", "-la");
```

Gulp example:
```js
const gulp = require("gulp");
const procSpawn = require("proc-spawn");

gulp.task("hello", () => {
	return procSpawn("echo", ["hello world"]);
});

```