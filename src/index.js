/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
import path from 'path';

import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function loader(content) {
  const options = getOptions(this);

  validateOptions(schema, options, {
    name: 'Node Loader',
    baseDataPath: 'options',
  });

  const name = path.basename(this.resourcePath);

  this.emitFile(name, content);

  return `
console.log(__dirname + "/" + __webpack_public_path__ + ${JSON.stringify(
    name
  )});
try {
  global.process.dlopen(module, __dirname + "/" + __webpack_public_path__ + ${JSON.stringify(
    name
  )}${options.flags ? `, ${JSON.stringify(options.flags)}` : ''});
} catch (error) {
  throw new Error('node-loader:\\n' + error);
}
`;
}

export const raw = true;
