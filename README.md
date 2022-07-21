# @babel/core and babel-plugin-polyfill-corejs3

I get the following error when using `babel-plugin-polyfill-corejs3` if `@babel/core` is >= 7.16.10:

```shell
ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: [BABEL]: Invalid host defined options (While processing: /PATH/webpack-babel-corejs-test/node_modules/babel-plugin-polyfill-corejs3/esm/index.mjs)
    at import_ (/PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/import.cjs:2:3)
    at /PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:115:26
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:51:103)
    at _next (/PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:53:194)
    at /PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:53:364
    at new Promise (<anonymous>)
    at /PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:53:97
    at _loadMjsDefault (/PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:118:26)
    at loadMjsDefault (/PATH/webpack-babel-corejs-test/node_modules/@babel/core/lib/config/files/module-types.js:106:26)
```

You can reproduce the error in this repo by running `yarn build` / `npm run build`.

To see this build successfully,

- Install `@babel/core@7.16.7` or lower, or
- Remove `polyfill-corejs3` from `.babelrc`
