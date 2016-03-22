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

Usage example with plugin `gulp-load-plugins`
```js
const gulp = require("gulp");
const g = require("gulp-load-plugins")({pattern: ["proc-spawn"]});

gulp.task("hello", () => {
	return g.procSpawn("echo", ["hello world"]);
});

```