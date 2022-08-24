# Sales-API

#### If you clone this repository use:
    yarn or npm install
---

## Typescript Starter

Install typescript dependecies (package.json):<br>
	`yarn add typescript ts-node-dev @types/node tsconfig-paths -D`

Usage:

    -typescript:
        dependency needed to run TypeScript.

    -ts-node-dev:
        Tool that compiles your project with Typescript and restarts the project when the file is modified, with it you don't need the javascript nodemon because it already does this function.

    -@types/node:
        Where we can find several useful type definitions, such as the Node type definitions that allow us to use, for example, require to import modules.
        Node's @types package contains type definitions for many libraries such as Express, Sequelize, JQuery and many others.

    - tsconfig-paths: allows you to map application modules and create shortcuts to these folders/files in a scalable way..


Install typescrit resources(`tsconfig.json`):<br>

```
yarn tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`
```
<br>

## Configure lint format

Install esLint:
`yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

 Create file `.eslintrc` and add

	{
		"root": true,
		"parser": "@typescript-eslint/parser",
		"plugins": [
			"@typescript-eslint"
		],
		"extends": [
			"eslint:recommended",
			"plugin:@typescript-eslint/eslint-recommended",
			"plugin:@typescript-eslint/recommended"
		],
		"rules": {
			"no-console": "warn"
 		}
	}

Create file `.eslintignore` and add

	node_modules
	dist
	build
	/*.js


and add this line in you `package.json`

	"scripts": {
		"lint": "eslint . --ext .ts",
		"lint-fix": "eslint . --ext .ts --fix"
	}



## Configure Prettier format

Install esLint:
`yarn add prettier -D`

Install `yarn add eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D`

 Create file `.prettierrc` and add

	{
		"semi": true,
		"trailingComma": "all",
		"singleQuote": true,
		"printWidth": 80,
		"arrowParens": "avoid"
	}

and fix you file `.eslintrc` to:

	{
		"root": true,
		"parser": "@typescript-eslint/parser",
		"plugins": [
			"@typescript-eslint",
			"prettier"
		],
		"extends": [
			"eslint:recommended",
			"plugin:@typescript-eslint/eslint-recommended",
			"plugin:@typescript-eslint/recommended",
			"prettier/@typescript-eslint",
			"plugin:prettier/recommended"
		],
		"rules": {
			"no-console": "warn",
			"prettier/prettier": "error"
		}
	}

## Configure Docker and Typeorm

Install `typeorm` and `reflect-metadata`
```bash
yard add typeorm -D 'and' yarn add reflect-metadata
```

create file `ormconfig.js` and add value:

	{
		"type": "DB-Type", //ex: postgres
		"host": "you-host", //ex: localhost
		"port": 12345, //ex: postgres-default-port: 5432
		"username": "username", //ex: image-name
		"password": "123", //ex: docker
		"database": "dbProject", //ts1122
		"migrations": ["./src/server/typeorm/migrations/*.ts"],
		"cli": {
			"migrationDir": "./src/server/typeorm/migrations"
		}
	}

add **Script** new line in `package.json`:
```
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
```

To **Create** docker image:
```docker
  docker run --name <image-name> -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

  for **Start** image, use:
  ```docker
    docker start <container-name>
  ```
  ---
  for **Stop** image, use:
  ```docker
    docker stop <container-name>
```
---
