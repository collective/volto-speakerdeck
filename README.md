# Speakerdeck content in Plone (@plone-collective/volto-speakerdeck)

Add decks from Speakerdeck in your Plone site

[![npm](https://img.shields.io/npm/v/@plone-collective/volto-speakerdeck)](https://www.npmjs.com/package/@plone-collective/volto-speakerdeck)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://collective.github.io/volto-speakerdeck/)
[![CI checks](https://github.com/collective/volto-speakerdeck/actions/workflows/main.yml/badge.svg)](https://github.com/collective/volto-speakerdeck/actions/workflows/main.yml)

## ✨ Features

**🎥 [Watch Demo Video](https://raw.githubusercontent.com/collective/volto-speakerdeck/refs/heads/main/docs/_static/SpeakerDeck.mp4)**

![Demo](https://raw.githubusercontent.com/collective/volto-speakerdeck/refs/heads/main/docs/docs/_static/SpeakerDeck.gif)

- **Embed Speakerdeck presentations**: Add a Volto block that allows you to embed presentations hosted on [Speakerdeck](https://speakerdeck.com) directly into your Plone site pages.
- **Easy integration**: Simply paste the Speakerdeck URL and the block handles the embedding automatically.
- **Responsive display**: Presentations are displayed responsively, adapting to different screen sizes.

> **Note**: For interactive examples and detailed documentation, check out the [Storybook](https://collective.github.io/volto-speakerdeck/).

## 📦 Installation

Installing `@plone-collective/volto-speakerdeck` on your project requires Volto 18 or above.


### Adding this package as a dependency

To add `@plone-collective/volto-speakerdeck` to your project, locate your project's policy package (typically found in the `packages` folder) and edit its `package.json` file.

Add `@plone-collective/volto-speakerdeck` under `dependencies`:

```json
"dependencies": {
    "@plone-collective/volto-speakerdeck": "*"
}
```

Then add `@plone-collective/volto-speakerdeck` to the `addons` array:

```json
"addons": [
  "@plone-collective/volto-speakerdeck"
]
```

### Running the installation

After adding `@plone-collective/volto-speakerdeck` to your project, re-run the installation with:

```bash
make install
```

And start the project with:

```bash
make start
```

## ✅ Test installation

Visit http://localhost:3000/ in a browser, login, and check the Speakerdeck block is available.


## 🛠️ Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Prerequisites ✅

-   An [operating system](https://6.docs.plone.org/install/create-project-cookieplone.html#prerequisites-for-installation) that runs all the requirements mentioned.
-   [nvm](https://6.docs.plone.org/install/create-project-cookieplone.html#nvm)
-   [Node.js and pnpm](https://6.docs.plone.org/install/create-project.html#node-js) 24
-   [Make](https://6.docs.plone.org/install/create-project-cookieplone.html#make)
-   [Git](https://6.docs.plone.org/install/create-project-cookieplone.html#git)
-   [Docker](https://docs.docker.com/get-started/get-docker/) (optional)

### Installation 🔧

1.  Clone this repository, then change your working directory.

    ```shell
    git clone git@github.com:collective/volto-speakerdeck.git
    cd volto-speakerdeck
    ```

2.  Install this code base.

    ```shell
    make install
    ```

### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### 🔧 Development environment set up

Install package requirements.

```shell
make install
```

### 🚀 Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### 🧹 Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### 💅 Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### 🌐 i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### 🧪 Unit tests

Run unit tests.

```shell
make test
```

### 🤖 Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## 📄 License

The project is licensed under the MIT license.

## Credits and acknowledgements 🙏

Generated using [Cookieplone (0.9.10)](https://github.com/plone/cookieplone) and [cookieplone-templates (dd13073)](https://github.com/plone/cookieplone-templates/commit/dd13073d34447056d6992461d8da29447d62c029) on 2026-01-20 13:59:44.590638. A special thanks to all contributors and supporters!
