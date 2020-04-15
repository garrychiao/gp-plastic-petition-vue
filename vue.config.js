const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')


module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
      'https://change.greenpeace.org.tw/2020/petition/plastic-retailer-petition-mc':'./',

    outputDir: 'docs',

    assetsDir: 'static',

    filenameHashing: true,

    configureWebpack:  {
      plugins: process.env.NODE_ENV === 'production' ? [
        new PrerenderSPAPlugin({
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, 'docs'),
          // Required - Routes to render.
          routes: [ '/'],
        })
      ] : []
    },
    devServer: {
      disableHostCheck: true
    }
};