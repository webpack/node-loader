<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# node-loader

A [Node.js add-ons](https://nodejs.org/dist/latest/docs/api/addons.html) loader.

## Getting Started

To begin, you'll need to install `node-loader`:

```console
$ npm install node-loader --save-dev
```

No options for the loader.

### Inline

**index.js**

```js
import node from 'node-loader!./file.node';
```

And run `webpack` via your preferred method.

### Configuration

**index.js**

```js
import node from 'file.node';
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/node-loader.svg
[npm-url]: https://npmjs.com/package/node-loader
[node]: https://img.shields.io/node/v/node-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/node-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/node-loader
[tests]: https://github.com/webpack-contrib/node-loader/workflows/node-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/node-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/node-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/node-loader
[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=node-loader
[size-url]: https://packagephobia.now.sh/result?p=node-loader
