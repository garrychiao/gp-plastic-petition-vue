# gp-plastic-petition-vue

## Local Development Setup

```
yarn install
yarn serve
```

And browse to http://localhost:8080

## Compile to production-ready pre-rendered HTML

1. First you need to update the `publicPath` in file `vue.config.js`
```
publicPath: process.env.NODE_ENV === 'production' ?
  'https://YOUR_PUBLIC_URL':'./'
```

The compiled html will try to load the static files (js/css/images) from the given url.

And start to compile the first time.

```
yarn build
```

2. Upload the compiled folder `docs` to your accessible public server. Which can be accessed by URL `https://YOUR_PUBLIC_URL/static/{THE_STATIC_FILES}`

3. Compile again in order to generate the pre-rendered HTML.

```
yarn build
```

4. Now the `docs/index.html` is a pre-rendered HTML that you can move it to anywhere.

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
