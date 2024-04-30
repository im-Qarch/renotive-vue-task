# Renotive | VueJS Mini Assignment

![Type script 5](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Tailwind 3](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite 5](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![UnoCSS](https://img.shields.io/badge/unocss-333333.svg?style=for-the-badge&logo=unocss&logoColor=white)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This repo represent Renotive | VueJS Mini Assignment. the project has been bootstrapped using:

- `Vue ^3.4.3`
- `Vite ^5.0.10`
- `Typescript ^5.3.3`
- `Pinia ^2.1.7`
- `Tailwind ^3.4.0`

## Requirements:

- NPM `^8.19.2`
- PNPM `^8.13.1`
- Nodejs `^18.12.1`
- Linux command-line environment or other unix-compatible platforms.

## Development

> Check [Requirements](#requirements) before proceeding.
> Clone this repo on your machine:

```sh
git clone https://github.com/im-Qarch/renotive-vue-task.git
```

Then install dependencies with clear flag:

```sh
pnpm install
```

And run local dev server:

```
pnpm dev
```

Now open [localhost:3000](http://localhost:3000) on your browser.

Try changing editing any file and see the results.

## Production

> Make sure to read [Requirements](#requirements) before proceeding.
> Clone this repo:

```sh
git clone https://github.com/im-Qarch/renotive-vue-task.git
```

Then run a clean-install and build the project:

```sh
pnpm install --frozen-lockfile
pnpm build-only
```

Now you should see a `/dir` directory in project's root. This directory contains all the files required to deploy and run this project. See [Deploy](#deploy) for more details on how to deploy it on a server.

## Deploy

Qarch is a static powered SPA (single-page application) which can be hosted like any other static sites. just put the `/dist` directory on your web server and open it on your browser.

However there is one extra configuration needed to be adjusted. since we're going to deploy a SPA, web server must redirects all routes (including routes that may result in `404`) to the `/dist/index.html` and let it to handle routing from client-side.

## License

© 2024 - present. Qarch, Inc. All rights reserved.
