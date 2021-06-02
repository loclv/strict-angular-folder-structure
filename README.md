# Strict Scalable Angular Folder Structure

- created by strict mode
- using lazy-load module // TODO
- using OpenAPI 3.0 - swagger // TODO
- using JSON Web Token (JWT)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Environment 🪐

```sh
node -v
# ^14.x
yarn -v
# ^1.22.10
```

## Editor Extensions ⚔️

For [vscode](https://code.visualstudio.com/):

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - must be installed!

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

[angular-schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics)

[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

[openapi-lint](https://marketplace.visualstudio.com/items?itemName=mermade.openapi-lint)

[vscode-angular-html](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)

[code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

[markdown-preview-enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

[swagger-viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer)

[svg-preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)

## Run mock API from swagger file 🧪

Use [this tool](https://meta.stoplight.io/docs/prism/README.md).

```sh
yarn api
```

or if you want to using in global context:

```sh
npm install -g @stoplight/prism-cli
prism mock ./swagger.yaml
```

## Project structure 🧱

Based on [Angular Folder Structure](https://angular-folder-structure.readthedocs.io/en/latest/) (it's repository in [here](https://github.com/mathisGarberg/angular-folder-structure)) and [Jasonwatmore 's jwt-authentication-example](https://jasonwatmore.com/post/2020/07/09/angular-10-jwt-authentication-example-tutorial).

---

## Development server 🧑‍💻

```sh
yarn start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g c component-name` to generate a new component. You can also use `ng g directive|pipe|service|class|guard|interface|enum|module`.

## Build

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```sh
yarn b
```

## Running unit tests

Run `ng t` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Opening testing coverage report

Generate only report:

```sh
yarn gen-cover
```

Open file `./coverage/**/index.html` with browser to show testing report.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
