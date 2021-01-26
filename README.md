`tsc sandbox.ts sandbox.js`  

`tsc sandbox.ts`

`tsc sandbox.ts -w` Watch all changes when saved

`tsc --init` Create tsconfig.json

Change config in `jsconfig.json`

`"outDir": "./public",`

`"rootDir": "./src"`

`tsc` After set up tsconfig.json => ts to js manually

`tsc -w` After set up tsconfig.json => ts to js automatically


Add in tsconfig

`"include" : ["src"]` To prevent app.ts (root directory) is compiled to public folder

<!-- Lesson 14: Modules -->
Change `target` and `module` properties in tsconfig.json

`target`: `es5` -> `es6`

`module` : `commonjs` -> `es2015`


go to index.html add `type="module"`

`<script type="module" src="app.js"></script>`